export const Types = {
  'SET_TOGGLED': 'spa_view/SET_TOGGLED',
};

export const initialState = {
  loading: false,
  toggled: false,
}

export default function reducer(state = initialState, action) {
  switch(action.type){
    case Types.SET_TOGGLED:
      return { ...state, toggled: action.payload}
    default:
      return {...state};
  }
}

export const Creators = {
  setToggled: value => ({
    type: Types.SET_TOGGLED,
    payload: value
  })
};