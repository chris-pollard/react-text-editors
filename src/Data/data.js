const frameworks = [
    {
        pageHeading: 'Draft JS',
        imgSource: './Assets/draftjs-logo.svg',
        summary: {
            line1: 'Draft.js is a Rich Text Editor Framework built for React.',
            line2: 'This framework is owned by Facebook, and they use it for comments, posts and Messenger.',
            line3: 'Draft.js has A LOT of features under the hood but will require custom code.',
            keyFeatures: ['Extensible and customisable','Declarative rich text', 'Immutable editor state']
        },
        features: {
            fullSupport: ['block','inline','undo','paste','lists','media','links'],
            partialSupport: ['nested']
        },
        assessmentCriteria: {
            funding: 'Facebook',
            release: '0.11.7 (released 10 months ago)',
            license: 'MIT',
            functionality: 'Bare metal 🤘',
            releaseCycle: 'Semantic Version',
            dataStructure: 'JSON',
            ecosystem: 'Full editor and some plugins',
            browserSupport: '❌IE11 🤔 Mobile browser',
            packagesUsing: '83.8K',
            stars: '20.5K',
            forks: '2.3K'
        },
        learnMore: {
            resources: [
                {  
                    desc: 'Official website:',
                    url: 'https://www.draftjs.org',
                    text: 'draftjs.org'
                },
                {
                    desc: 'Source code:',
                    url: 'https://github.com/facebook/draft-js',
                    text: 'github.com/facebook/'},
                {
                    desc: 'Stack Overflow:',
                    url: 'https://stackoverflow.com/questions/tagged/draftjs',
                    text: 'questions/tagged/draftjs'},
                {
                    desc: 'Implementation by jpuri:',
                    url: 'https://github.com/jpuri/react-draft-wysiwyg',
                    text: 'github.com/jpuri/'},

                {
                    desc: 'Awesome Draft.js resources:',
                    url: 'https://github.com/nikgraf/awesome-draft-js',
                    text: 'github.com/nikgraf'
                }
            ],
            embedID: 'rHat0n1xBVc'
        }
    },
    {
        pageHeading: 'Slate',
        imgSource: './Assets/slate-logo.png',
        summary: {
            line1: '"Slate is a completely customizable framework for building rich text editors."',
            line2: 'Slate was created in response to some limitations of existing editors, including DraftJS',
            line3: 'Collaborative editing and serialising to HTML, Markdown etc have been factored in.',
            keyFeatures: ['Plugins are first-class entities','Schema-less core, no assumptions baked into the library', 'Nested document model']
        },
        features: {
            fullSupport: ['block','inline','undo','paste','lists','media','tables','links','nested'],
            partialSupport: []
        },
        assessmentCriteria: {
            funding: 'ianstormtaylor (individual)',
            release: '0.65.2 (released 1 month ago)',
            license: 'MIT',
            functionality: 'Bare metal 🤘',
            releaseCycle: 'Semantic Version',
            dataStructure: 'JSON',
            ecosystem: 'Not many plugins, example code',
            browserSupport: 'No known issues',
            packagesUsing: '55.2K',
            stars: '21.3K',
            forks: '2.4K'
        },
        learnMore: {
            resources: [
                {  
                    desc: 'Official website:',
                    url: 'https://docs.slatejs.org',
                    text: 'slatejs.org'
                },
                {
                    desc: 'Source code:',
                    url: 'https://github.com/ianstormtaylor/slate',
                    text: 'github.com/ianstormtaylor/'},
                {
                    desc: 'Stack Overflow:',
                    url: 'https://stackoverflow.com/questions/tagged/slatejs',
                    text: 'questions/tagged/slatejs'},
                {
                    desc: 'GitBook - built on Slate:',
                    url: 'https://www.gitbook.com/',
                    text: 'gitbook.com'},

                {
                    desc: 'Nossas - another example:',
                    url: 'https://slate-editor.bonde.org/',
                    text: 'slate-editor.bonde.org'
                }
            ],
            embedID: 'CmuUQymjbRo'
        }
    }
]

export default frameworks