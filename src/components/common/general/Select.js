import React from 'react'

export const Select = () => {
    return (
        <div className="form-group" data-select2-id={29}>
            <label>Minimal</label>
            <select
                className="form-control select2 select2-hidden-accessible"
                style={{ width: '100%' }}
                data-select2-id={1}
                tabIndex={-1}
                aria-hidden="true"
            >
                <option defaultValue="selected" data-select2-id={3}>
                    Alabama
                </option>
                <option data-select2-id={35}>Alaska</option>
                <option data-select2-id={36}>California</option>
                <option data-select2-id={37}>Delaware</option>
                <option data-select2-id={38}>Tennessee</option>
                <option data-select2-id={39}>Texas</option>
                <option data-select2-id={40}>Washington</option>
            </select>
            <span
                className="select2 select2-container select2-container--default select2-container--below select2-container--focus"
                dir="ltr"
                data-select2-id={2}
                style={{ width: '100%' }}
            >
                <span className="selection">
                    <span
                        className="select2-selection select2-selection--single"
                        role="combobox"
                        aria-haspopup="true"
                        aria-expanded="false"
                        tabIndex={0}
                        aria-disabled="false"
                        aria-labelledby="select2-1qi6-container"
                    >
                        <span
                            className="select2-selection__rendered"
                            id="select2-1qi6-container"
                            role="textbox"
                            aria-readonly="true"
                            title="Alabama"
                        >
                            Alabama
                        </span>
                        <span className="select2-selection__arrow" role="presentation">
                            <b role="presentation" />
                        </span>
                    </span>
                </span>
                <span className="dropdown-wrapper" aria-hidden="true" />
            </span>
        </div>
    )
}
