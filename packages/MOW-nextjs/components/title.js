import {createElement} from 'react';
import { twMerge } from 'tailwind-merge';

export default ({type,children, className:classes}) => {

    const level = type ? type : 'h1'

    const styles = {
        H1: 'font-playfair font-black text-5xl text-green-500 my-3',
        H2: 'font-playfair text-green-500 font-bold text-5xl mb-3',
        H3: 'font-playfair text-green-500 font-bold text-5xl mb-10',
        H4: 'font-quicksand text-sm tracking-widest uppercase text-gray-400 mb-5'
    }

    return createElement(
        level, 
        { className:twMerge(`${styles[level.toUpperCase()] ? styles[level.toUpperCase()] : ''}`,classes)},
        children
    )

}