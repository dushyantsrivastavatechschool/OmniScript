import omniscriptText from 'omnistudio/omniscriptText'; 
export default class LwcOverriddeCustom extends omniscriptText{
    handleBlur (evt) {
        console. log('Custom event called');
        let value0fElement = evt.target.value;
        this.applyCallResp(value0fElement.toLowerCase());
    }
}