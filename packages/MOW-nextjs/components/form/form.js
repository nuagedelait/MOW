import { useEffect, useState, createElement } from "react";
import client from "../../client";
import Input from "./input";
import Submit from "./submit";
import actions from './actions';
import { data } from "autoprefixer";

const inputsTypes = {
    "input" : Input,
    "submit": Submit
}

export default (props) => {

    const {
        content,
        reference,
        layout
    } = props

    const [inputs,setInputs] = useState(content ? content : []);
    const [action,setAction] = useState(null);
    const [isLoading,setLoading] = useState(true);
    const [message,setMessage] = useState('');

    useEffect( () => {
        if(reference){
            const fetch = async () => {
                const form = await client.fetch(`
                    *[_type == "form" && _id == "${reference}"][0]
                `);
                setAction(form.action)
                setInputs(form.inputs);
                setLoading(false);
            }
            fetch();
        }
    },[reference]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(actions[action]){
            setLoading(true);
            actions[action](event.target).then( (data) => {
                if(data.error){
                    setMessage(data.error);
                }else{
                    setMessage('Merci !');
                }
                setLoading(false);
            });
        }else{
            console.log('nothing')
        }
    }

    return <form className="flex" onSubmit={handleSubmit}>
        {
           !isLoading && inputs.map( (input,index) => {
                return createElement(inputsTypes[input._type], {
                    data: {
                      ...input,
                      layout,
                      id:index
                    },
                    key: index
                })
            })
        }
        <p className="text-black mt-5 text-center"><span>{message}</span></p>
    </form>
}