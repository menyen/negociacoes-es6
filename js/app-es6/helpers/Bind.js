import {ProxyFactory} from '../services/ProxyFactory.js';
import {View} from '../views/View.js';

export class Bind {
    
    constructor(model, view, ...props) {
        
        let proxy = ProxyFactory.create(model, props, model => 
            view.update(model));
            
        view.update(model);
        
        return proxy;
    }
}