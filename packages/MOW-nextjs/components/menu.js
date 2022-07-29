import { useEffect, useState } from "react"
import client from "../client";
import { twMerge } from 'tailwind-merge';

const layouts = {
    "default":"",
    "main-post":"w-1/2"
}

export default ({id, layout}) => {

    const [items,setItems] = useState([]);

    useEffect( () => {

        const fetch = async () => {
            const menu = await client.fetch(`
                *[_type == "navigation" && navId.current == "${id}"][0]{
                    "items":items[]{
                        text,
                        "link":navigationItemUrl{
                            "internal":internalLink{
                                "reference":@->{
                                    "page":slug.current
                                }
                            },
                            "external":externalUrl
                        }
                    }
                }
            `);
            setItems(menu.items);
        }

        fetch();
    },[]);

    return <ul id={id} className={twMerge('flex justify-center align-middle relative font-bold tracking-wider uppercase text-xs text-white bg-transparent z-10 w-ful p-5', layouts[layout] ? layouts[layout] : layouts['default'])}>
        {
            items.map( (item,index) => {
                return <li key={index} className="m-3 opacity-100 hover:opacity-75 transition-opacity">
                    <a href={
                    item.link.internal ? `/${item.link.internal.reference.page}` : item.link.external
                    } target={item.link.internal ? '_self' : '_blank'}>{item.text} </a>
                    
                </li>
            })
        }
    </ul>

}