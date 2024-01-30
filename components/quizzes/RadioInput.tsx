import React, {ReactElement} from "react";
import {ControllerRenderProps} from "react-hook-form/dist/types/controller";

export default function RadioInput(props: { field?: ControllerRenderProps, name?: string, value: string, checked: boolean | undefined, readOnly: boolean, labelElement: ReactElement }) {

  return <>
    <label htmlFor={props.value}>
      <div className="radio d-flex align-items-center justify-center">

        <input type="radio"  {...props.field} value={props.value}
               checked={undefined} readOnly={props.readOnly} defaultChecked={props.checked}/>
        <div className={`radio__mark ${props.readOnly ? "is-readonly" : ""}`}>
          <div className="radio__icon"></div>
        </div>
        <div className="fw-500 ml-12 pointer w-1/1 d-flex flex-row items-center">
          {props.labelElement}
        </div>

      </div>
    </label>

  </>
}
