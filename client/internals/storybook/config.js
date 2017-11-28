import { configure } from '@storybook/react';

const requireAll = (requireContext) => (
  requireContext.keys().map(requireContext)
);

const loadStories = () => {
  requireAll(require.context('../../src', true, /story\.tsx?$/))
};

configure(loadStories, module);
