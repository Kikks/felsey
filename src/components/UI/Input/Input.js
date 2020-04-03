import React from 'react';

const Input = (props) => {
    let textClassName = [props.className, "form__input--text"];
    let textAreaClassName = [props.className, "form__input--textarea"];
    let selectClassName = [props.className, "form__input--select"];
    let optionsClassName = [props.optionsClassName, "form__input--options"];
    let input = null;

    switch(props.inputType){
        case('text'):
            input = <input key = {props.inputType} type = "text" className = {textClassName.join(' ')} value = {props.value} placeholder = {props.placeholder} required = {props.required} onChange = {props.changed}/>;
            break;

        case('email'):
            input = <input key = {props.inputType} type = "email" className = {textClassName.join(' ')} value = {props.value} placeholder = {props.placeholder} required = {props.required} onChange = {props.changed}/>;
            break;
        case('number'):
            input = <input key = {props.inputType} type = "number" className = {textClassName.join(' ')} value = {props.value} placeholder = {props.placeholder} required = {props.required} onChange = {props.changed} />;
            break; 
            
        case("textarea"):
            input = <textarea key = {props.inputType} rows = {props.rows} className = {textAreaClassName.join(' ')} value = {props.value} placeholder = {props.placeholder} required = {props.required} onChange = {props.changed}/>;
            break;

        case('select'):
            input =(
                <select key = {props.inputType} className = {selectClassName.join(" ")} required = {props.required} onChange = {props.changed}>
                    {props.selectOptions.options.map(option => (
                        <option key = {option.value} className = {optionsClassName.join(" ")} value = {option.value}>{option.displayValue}</option>
                    ))}
                </select>
            );
            break;

        default:
            input = null;
    }
    return(
        [input]
    );
};

export default Input;