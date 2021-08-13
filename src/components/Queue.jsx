import React, {useState} from "react";
import QueueOrder from "./QueueOrder";

export default function Queue(props) {
    const queueComponents = props.queue.map((item => <QueueOrder key={item.id} {...item} userOrder={props.userOrder}/>))
    return(
        <div className="row mb-3">
            <div className="card">
                <div className="card-body component">
                    <div className="row">
                        <h2 className="mb-0">Order queue</h2>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            {queueComponents}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}