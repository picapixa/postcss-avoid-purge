import { Comment, Root } from "postcss";

module.exports = () => {
  return {
    postcss: true,
    postcssPlugin: 'postcss-avoid-purge',
    Once(root: Root) {
      root.prepend(new Comment({ text: '! purgecss start ignore' }));
      root.append(new Comment({ text: '! purgecss end ignore' }));
    }
  }
}

module.exports.postcss = true;
