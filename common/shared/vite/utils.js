
const convertLibNameFromPackageName = (name) => {
  return name
        .replace(/^@decision-survey(?:-[^/]+)?\//, 'decision-survey-')
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
}

const autoExternalizeDependency = () => {
  const externals = new Set();
    const globals = {};
    let hasCss = false;

    const externalMap = {
        'lodash/debounce': 'lodash.debounce',
        'monaco-editor': 'monaco',
        react: 'React',
        'react-dom': 'ReactDOM',
    };

    return {
        name: 'auto-detected-external',
        enforce: 'pre',
        apply: 'build',

        resolveId(source) {
            if (source.endsWith('.less') || source.endsWith('.css')) {
                hasCss = true;
            }

            if (source in externalMap) {
                externals.add(source);
                globals[source] = externalMap[source];

                return { id: source, external: true };
            } else if (source.startsWith('@decision-survey') && source !== '@@decision-survey/icons') {
                externals.add(source);

                globals[source] = convertLibNameFromPackageName(source);

                return { id: source, external: true };
            }

            return null;
        },

        outputOptions(opts) {
            opts.globals = globals;

            if (hasCss) {
                opts.assetFileNames = 'index.css';
            }

            return opts;
        },

        generateBundle() {
            // console.log('Auto-detected external modules:', Array.from(externals));
            // console.log('Auto-detected globals:', globals);
        },
    };
}

export {
    convertLibNameFromPackageName,
  autoExternalizeDependency
}