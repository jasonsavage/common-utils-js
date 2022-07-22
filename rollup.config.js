import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/common-utils-bundle.js',
        outputToFilesystem: true,
        format: 'cjs',
        sourcemap: true,
    },
    plugins: [typescript()],
};
