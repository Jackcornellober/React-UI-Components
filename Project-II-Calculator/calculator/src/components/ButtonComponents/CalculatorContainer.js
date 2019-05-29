import React from 'react';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';
import CalculatorDisplay from '../DisplayComponents/CalculatorDisplay';

const CalculatorContainer = () => {
    return (
        <div>
            <CalculatorDisplay />
            <div className = 'numberAction'>
                <NumberButton />
                <ActionButton />
            </div>
        </div>
    );
}

export default CalculatorContainer;