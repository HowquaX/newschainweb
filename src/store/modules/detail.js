import actions from './../actions/detail';
import types from './../types/detail';

export default {
    actions,
    state:{
        desc:{},
        articlesData: []
    },
    mutations:{
        [types.getDetail]( state , article ) {
            state.desc=article
            state.desc = Object.assign({},state.desc);
            loadingClose()
            // console.log(data);
        },
        [types.deriveArticles]( state , data ) {
            state.articlesData= data
            console.log(state.articlesData, '6789')
        }
    }
}
