import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        if (!word) return "";
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div style={{height: '45px'}}>
            {props.alert && (
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show py-2 container`} role="alert">
                    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
                </div>
            )}
        </div>
    )
}
