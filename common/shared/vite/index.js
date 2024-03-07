import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import process from "node:process";
import dts from 'vite-plugin-dts';
import { defineConfig, mergeConfig } from "vitest/config";
import { autoExternalizeDependency, convertLibNameFromPackageName } from "./utils.js";

/**
 * IFeatures
 * @typedef {object} IFeatures - features
 * @property {boolean} react - whether to use react
 * @property {boolean} css - whether to use css
 * @property {boolean} dom - whether to use dom
 */

/**
 * IOptions
 * @typedef {object} IOptions - options of shared vite config
 * @property {string} mode - mode of vite
 * @property {object} pkg - package.json
 * @property {IFeatures} features - package.json
 */

const createViteConfig = (overrideConfig, options ) => {
  const { mode, pkg, features } = options;

    const dirname = process.cwd();

    const originalConfig = {
        build: {
            target: 'chrome70',
            outDir: 'lib',
            lib: {
                entry: resolve(dirname, 'src/index.ts'),
                name: convertLibNameFromPackageName(pkg.name),
                fileName: (format) => `${format}/index.js`,
                formats: ['es', 'umd', 'cjs'],
            },
        },
        plugins: [
            autoExternalizeDependency(),
            dts({
                entryRoot: 'src',
                outDir: 'lib/types',
            }),
        ],
        define: {
            'process.env.NODE_ENV': JSON.stringify(mode),
            'process.env.BUNDLE_TYPE': JSON.stringify(process.env.BUNDLE_TYPE ?? ''),
        },
        test: {
            coverage: {
                reporter: ['html', 'json'],
                provider: 'custom',
                customProviderModule: import('@vitest/coverage-istanbul'),
            },
        },
    };

    if (features) {
        if (features.react) {
            originalConfig.plugins.push(react());
        }

        if (features.css) {
            originalConfig.css = {
                modules: {
                    localsConvention: 'camelCaseOnly',
                    generateScopedName: 'decision-survey-[local]',
                },
            };
        }

        if (features.dom) {
            originalConfig.test.environment = 'happy-dom';
        }
    }

    return mergeConfig(
        defineConfig(originalConfig),
        overrideConfig
    );
}

export default createViteConfig;