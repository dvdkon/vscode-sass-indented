import { AbstractSyntaxTree } from '../abstractSyntaxTree/abstractSyntaxTree';
import { createSassDiagnostic, createRange } from '../abstractSyntaxTree/diagnostics';

test('AST: Use Scopes', async () => {
  const ast = new AbstractSyntaxTree();
  await ast.parseFile(
    `@use "./files/import1"
    @use "./files/import2" as *
.class
  @use "./files/import3"
  margin: $var $var2 $var3 import1.$var`,
    `${__dirname}/file.sass`,
    {
      insertSpaces: false,
      tabSize: 2,
    }
  );

  const expectedFiles: AbstractSyntaxTree['files'] = {
    [`${__dirname}/files/import1.sass`]: {
      diagnostics: [],
      body: [
        {
          type: 'variable',
          level: 0,
          line: 0,
          value: '$var',
          body: [{ type: 'literal', value: '20px' }],
        },
      ],
    },
    [`${__dirname}/files/import2.sass`]: {
      diagnostics: [],
      body: [
        {
          type: 'variable',
          level: 0,
          line: 0,
          value: '$var2',
          body: [{ type: 'literal', value: '20px' }],
        },
      ],
    },
    [`${__dirname}/file.sass`]: {
      diagnostics: [
        createSassDiagnostic('@useNotTopLevel', createRange(3, 2, 24)),
        createSassDiagnostic('variableNotFound', createRange(4, 10, 14), '$var'),
        createSassDiagnostic('variableNotFound', createRange(4, 21, 26), '$var3'),
      ],
      body: [
        {
          type: 'use',
          level: 0,
          line: 0,
          value: './files/import1',
          namespace: 'import1',
          uri: `${__dirname}/files/import1.sass`,
        },
        {
          type: 'use',
          level: 0,
          line: 1,
          value: './files/import2',
          namespace: null,
          uri: `${__dirname}/files/import2.sass`,
        },
        {
          line: 2,
          level: 0,
          type: 'selector',
          value: '.class',
          body: [
            {
              type: 'comment',
              level: 1,
              line: 3,
              value: '// @use "./files/import3"',
              isMultiLine: false,
            },
            {
              type: 'property',
              level: 1,
              line: 4,
              value: 'margin',
              body: [
                { type: 'variableRef', ref: null, value: '$var' },
                {
                  type: 'variableRef',
                  ref: { line: 0, uri: `${__dirname}/files/import2.sass` },
                  value: '$var2',
                },
                { type: 'variableRef', ref: null, value: '$var3' },
                {
                  type: 'variableRef',
                  ref: { line: 0, uri: `${__dirname}/files/import1.sass` },
                  value: 'import1.$var',
                },
              ],
            },
          ],
        },
      ],
    },
  };
  expect(ast.files).toStrictEqual(expectedFiles);
});
