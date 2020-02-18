export const Types = {
  'SET_STATE': 'components/SearchBox/SET_STATE',
  'GET_PROFESSIONALS': 'components/SearchBox/GET_PROFESSIONALS',
  'RETURN_PROFESSIONALS': 'components/SearchBox/RETURN_PROFESSIONALS',
  'SET_SELECTED_PROFISSIONAL': 'components/SearchBox/SET_SELECTED_PROFISSIONAL',
  'GET_SERVICES': 'components/SearchBox/GET_SERVICES',
  'RETURN_SERVICES': 'components/SearchBox/RETURN_SERVICES'
};

export const initialState = {
  loading: { professionals: false, services: false},
  professionals: [],
  selectedProfessional: null,
  services: [],
  location: {}
}

export default function reducer(state = initialState, action) {
  switch(action.type){
    case Types.SET_STATE:
      return { ...state, toggled: action.payload}
    case Types.GET_PROFESSIONALS:
      return {...state, loading: { ...state.loading, professionals: true }, professionals: []};
    case Types.RETURN_PROFESSIONALS:
      return {...state, loading: { ...state.loading, professionals: false}, professionals: action.payload};
    case Types.SET_SELECTED_PROFISSIONAL:
      return {...state, selectedProfessional: action.payload};
    case Types.GET_SERVICES:
      return {...state, loading: { ...state.loading, services: true }, services: []};
    case Types.RETURN_SERVICES:
      return {...state, loading: { ...state.loading, services: false}, services: action.payload};
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
  }),
  selectProfissional: (payload) => ({
    type: Types.SET_SELECTED_PROFISSIONAL,
    payload
  }),
  getServices: (professional) => ({
    type: Types.GET_SERVICES,
    payload: professional
  })
};