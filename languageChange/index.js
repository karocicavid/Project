import { strings } from "./localization";
import { CommonActions } from '@react-navigation/native';

export const changeRus=()=>{
    strings.setLanguage('ru');
    CommonActions.reset({
            
      })
}
export const changeEng=()=>{
    strings.setLanguage('en');
    CommonActions.reset({
            
      })
}