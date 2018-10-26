import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import WorkMain from '@/components/work/workMain'
import ProjectMain from '@/components/project/ProjectMain'
import workARSeeSoul from '@/components/work/workARSeeSoul'
import workWebTime from '@/components/work/workWebTime'
import workCampfire from '@/components/work/workCampfire'
import workWebmaverick from '@/components/work/workWebmaverick'
import workADFX from '@/components/work/workADFX'
import ResearchMain from '@/components/research/researchMain'
import ResearchMotion from '@/components/research/researchMotion'
import ResearchMozaic from '@/components/research/researchMozaic'
import ResearchWave from '@/components/research/researchWave'
import ResearchWaveDetail from '@/components/research/researchWaveDetail'
import projectPopcorn from '@/components/project/projectPopcorn'
import projectCube from '@/components/project/projectCube'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/work',
      name: 'WorkMain',
      component: WorkMain,
    },
    {
      path: '/work/arseesoul',
      name: 'workARSeeSoul',
      component: workARSeeSoul,
    },
    {
      path: '/work/webtime',
      name: 'workWebTime',
      component: workWebTime,
    },
    {
      path: '/work/campfire',
      name: 'workCampfire',
      component: workCampfire,
    },
    {
      path: '/work/webmav',
      name: 'workWebmaverick',
      component: workWebmaverick,
    },
    {
      path: '/work/adfx',
      name: 'workADFX',
      component: workADFX,
    },
    {
      path: '/research',
      name: 'ResearchMain',
      component: ResearchMain
    },
    {
      path: '/research/mozaic',
      name: 'ResearchMozaic',
      component: ResearchMozaic
    },
    {
      path: '/research/wave',
      name: 'ResearchWave',
      component: ResearchWave
    },
    {
      path: '/research/wave/detailView',
      name: 'ResearchWaveDetail',
      component: ResearchWaveDetail
    },
    {
      path: '/research/motion',
      name: 'ResearchMotion',
      component: ResearchMotion
    },
    {
      path: '/project',
      name: 'ProjectMain',
      component: ProjectMain
    },
    {
      path: '/project/popcorn',
      name: 'projectPopcorn',
      component: projectPopcorn
    },
    {
      path: '/project/cube',
      name: 'projectCube',
      component: projectCube
    },
  ],
  linkActiveClass: 'my-active-class',
})
