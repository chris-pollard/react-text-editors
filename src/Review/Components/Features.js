import './Features.css'


export default function Features({ info }) {

    const { fullSupport, partialSupport } = info

    const supportLevel = (style) => {
        if (fullSupport.includes(style)) {
            return '✅'
        } else if (partialSupport.includes(style)) {
            return '🤔'
        } else {
            return '❌'
        }
    }

    return (
        <div className="features">
            <h2>Features</h2>
            <div className="feature-table">
                <p>{supportLevel('block')} block styles</p>
                <p>{supportLevel('inline')} inline styles</p>
                <p>{supportLevel('undo')} undo/redo</p>
                <p>{supportLevel('paste')} paste</p>
                <p>{supportLevel('lists')} lists</p>
                <p>{supportLevel('nested')} nested blocks</p>
                <p>{supportLevel('media')} media</p>
                <p>{supportLevel('tables')} tables</p>
                <p>{supportLevel('links')} links</p>
            </div>

        </div>

    )
}