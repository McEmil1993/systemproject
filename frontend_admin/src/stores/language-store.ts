import { defineStore } from 'pinia';
import korean_laguage from '../languages/kr';
import english_language from '../languages/en';

export const useLanguageStore = defineStore('language',
{
  state: () => (
  {
    language: 'kr',
    data: korean_laguage,
  }),

  getters:
  {
    doubleCount (state)
    {
      return state.language;
    }
  },

  actions:
  {
    changeLanguage()
    {
      switch (this.language)
      {
        case 'kr':
          this.data = korean_laguage;  
        break;
        case 'en':
          this.data = english_language; 
        break;
      }
    }
  }
});
