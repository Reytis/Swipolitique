
type SwipePrecisionProps = {
    title: string,
    total: number,
    accuracy: number,
    noTotal?: boolean,
}

/**
 * A component to display swipe precision metrics.
 *
 * @param title - The title of the component.
 * @param total - The total number of items.
 * @param accuracy - The number of items that match the desired criteria.
 * @returns A React component displaying swipe precision metrics.
 */
export const SwipePrecision = ({title, total, accuracy, noTotal}:SwipePrecisionProps) => {
    const percentage = Math.round((((accuracy / total) * 100) * 100)) / 100;

    return <div className="swipe__precisions">
        <p>{title}</p>
        <div className="bar__container">
            <div className="labels">
                <span className="start-label">0%</span>
                <span className="current-percentage" style={{ left: `calc(${percentage}% - 15px)` }}>{percentage}%</span>
                <span className="end-label">100%</span>
            </div>
            <div className="bar"></div>
            <div className="progress" style={{ width: `${percentage}%` }}></div>
        </div>
        {!noTotal && <div className="swipe__datas">
            <div className="total"><span>Total:</span> {total}</div>
            <div className="accuracy"><span>Match:</span> {accuracy}</div>
        </div>}
    </div>
};

