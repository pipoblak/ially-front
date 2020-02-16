export const Types = {
  'SET_STATE': 'components/SearchBox/SET_STATE',
  'GET_PROFESSIONALS': 'components/SearchBox/GET_PROFESSIONALS',
  'RETURN_PROFESSIONALS': 'components/SearchBox/GET_PROFESSIONALS',
};

export const initialState = {
  loading: false,
  professionals: [],
  services: [],
  location: {}
}

export default function reducer(state = initialState, action) {
  switch(action.type){
    case Types.SET_STATE:
      return { ...state, toggled: action.payload}
    case Types.GET_PROFESSIONALS:
      return {...state, loading: true};
    default:
      return {...state};
  }
}

export const Creators = {
  setState: value => ({
    type: Types.SET_STATE,
    payload: value
  }),
  getProfessionals: () => ({
    type: Types.GET_PROFESSIONALS
  })
};