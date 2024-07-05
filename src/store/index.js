import { createStore } from 'vuex'

export default createStore({
  state: {
    aboutMeInfo:null,
    talentsHobbies:null,
    programmingSkills:null,
    projects:null,
    testimonialInfo:null,
    workExperienceInfo:null,
    educationInfo:null,
  },
  mutations: {
    setAboutMeInfo(state,payload){
    state.aboutMeInfo = payload
    },
    setProgrammingSkills(state, payload){
    state.programmingSkills = payload
    },
     setTalentsHobbies(state, payload){
      state.talentsHobbies = payload
    },
    setProjects(state, payload){
      state.projects = payload
    },
     setTestimonialInfo(state, payload){
       state.testimonialInfo = payload
    },
     setWorkExperienceInfo(state, payload){
       state.workExperienceInfo = payload
    },
     setEducationInfo(state, payload){
       state.educationInfo = payload
    } 
  },
  actions: {
    async getAboutMeInfo ({commit}){
      try {
        let fetchInfo = await fetch('https://aneeqbass.github.io/vuePortfolioAPI/data/data.json')
        let data = await fetchInfo.json()
        let {aboutMeInfo,projects,programmingSkills,talentsHobbies,testimonialInfo,workExperienceInfo,educationInfo} = data
        console.log(data);
        commit('setAboutMeInfo', aboutMeInfo)
        commit('setProgrammingSkills', programmingSkills)
        commit('setTalentsHobbies', talentsHobbies)
        commit('setProjects', projects)
        commit('setTestimonialInfo', testimonialInfo)
        commit('setWorkExperienceInfo', workExperienceInfo)
        commit('setEducationInfo', educationInfo)
      }
       catch (error) {
        console.log(error)
      }
  },
},
  modules: {
  }
})
