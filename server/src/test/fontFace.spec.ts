import { AbstractSyntaxTree } from '../abstractSyntaxTree/abstractSyntaxTree';

test('@font-face', async () => {
  const ast = new AbstractSyntaxTree();
  await ast.parseFile(
    `
		@font-face
    margin: 200px
    `,
    '/file',
    { insertSpaces: true, tabSize: 2 }
  );
  expect(await ast.stringifyFile('/file', { insertSpaces: true, tabSize: 2 })).toBe(`
@font-face
  margin: 200px
`);
});
