import { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import { SearchedParams } from '../type';

const MIN = 18;
const MAX = 100;

type AgeSelectorProps = {
    current: SearchedParams["age"];
};
export const AgeSelector = ({ current }:AgeSelectorProps) => {
    // State variable to store the selected age range values.
    const [values, setValues] = useState([current.min, current.max]);
    
    return (
        <div className="slider-container">
        <output className="output" id="output">
        <p>Tranche d'age</p>
        <div>{values[0]} - {values[1] === 100 ? '100+' : values[1]}</div>
        </output>
        <Range
        // The current values of the range.
        values={values}
        // The step size for the range.
        step={1}
        // The minimum value of the range.
        min={MIN}
        // The maximum value of the range.
        max={MAX}
        // A callback function that is called when the range values change.
        onChange={(values) => setValues(values)}
        // A render function for the track of the range.
        renderTrack={({ props, children }) => (
            <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{ ...props.style, width: '100%' }}
            >
            <div
            ref={props.ref}
            className="slider-track"
            style={{
                background: getTrackBackground({
                    values,
                    colors: ['var(--bg-dark)', 'var(--main)', 'var(--bg-dark)'],
                    min: MIN,
                    max: MAX,
                }),
            }}
            >
            {children}
            </div>
            </div>
        )}
        // A render function for the thumbs of the range.
        renderThumb={({ props }) => (
            <div {...props} className="slider-thumb"></div>
        )}
        />
        </div>
    );
};

