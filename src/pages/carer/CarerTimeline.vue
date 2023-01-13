<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue';



interface IWorkExperience {
    startDate: string;
    endDate: string;
    role: string;
    company: string;
    description: string;
    technologies: string[];
}
interface IProject {
    startDate: string;
    endDate: string;
    title: string;
    github: string;
    preview?: string;
    description: string;
    technologies: string[];
    image: string;
}

const projectsTimeline: Array<IProject> = reactive([
    {
        startDate: 'Aug 4, 2021',
        endDate: 'Sep 20, 2021',
        title: '🔥 pollytoon',
        preview: 'pollytoon.vercel.app',
        github: 'https://github.com/LUK3D/pollytoon.com',
        description: `✨
        Pollytoon is a website that provides 3D assets for designers, Animator and Game developers
        `,
        technologies: ['Vue 91.7%', 'TypeScript 5.2%', 'HTML 1.8%', 'CSS 1.3%'],
        image: 'https://github.com/LUK3D/pollytoon.com/raw/main/screenshots/ss03.png'
    },
    {
        startDate: 'Aug 4, 2021',
        endDate: 'Sep 20, 2021',
        title: '🔥 CssInMotion',
        preview: 'css-in-motion.vercel.app',
        github: 'https://github.com/LUK3D/CssInMotion',
        description: `✨
CSS-IMotion is a free and open source animation editor that runs on the browser created with Vite + Typescript + React + Tailwindcss. The workflow is based on After Effects and it has some powefull features like Timeline, Keyframing and much more...
        `,
        technologies: ['TypeScript 94.8%', 'CSS 2.9%', 'HTML 2.3%'],
        image: 'https://github.com/LUK3D/CssInMotion/raw/master/src/assets/Preview_01.png'
    },
    {
        startDate: 'Aug 4, 2021',
        endDate: 'Sep 20, 2021',
        title: '🔥 Luk UI',
        preview: 'lukyui.vercel.app',
        github: 'https://github.com/LUK3D/lukyUi',
        description: `🔥 Collection of cool Ui components made with React + Typescript + Tailwindcss/windicss`,
        technologies: ['TypeScript 95.7%', 'HTML 3.4%', 'CSS 0.9%'],
        image: 'https://github.com/LUK3D/lukyUi/raw/master/Previews/navbar_01.png'
    },
    {
        startDate: 'Aug 4, 2021',
        endDate: 'Sep 20, 2021',
        title: '🔥 MyTwitter',
        preview: 'mytwitter-zeta.vercel.app',
        github: 'https://github.com/LUK3D/my-twitter',
        description: `🔥 The most Advanced and beatifull twitter clone made with Vite + Vue + Typescript + Tailwindcss
        `,
        technologies: ['Vue 79.9%', 'TypeScript 18.4%', 'Other 1.7%'],
        image: 'https://github.com/LUK3D/my-twitter/raw/main/screenshots/ss01.png'
    },
    {
        startDate: 'Aug 4, 2021',
        endDate: 'Sep 20, 2021',
        title: 'Flutjs',
        github: 'https://github.com/LUK3D/Flutjs',
        description: `Flutjs is a javascript framework for creating beautiful, fast and lightweight websites. As the name suggests, Flutejs is based on Flutter for its simplicity and easy learning curve and the ability to easily extend.`,
        technologies: ['TypeScript 89.1%', 'HTML 8.1%', 'JavaScript 2.8%'],
        image: 'https://github.com/LUK3D/Flutjs/raw/master/Logo.svg'
    },
    {
        startDate: 'Aug 4, 2021',
        endDate: 'Sep 20, 2021',
        title: 'IC- Interactive Constructor🔥',
        github: 'https://github.com/LUK3D-Angola/IC-InteractiveConstructor',
        description: `Construtor interativo de páginas web.

O construtor interativo de páginas web, é um projeto desenvolvido pela LUK3D na pessoa de Filipe Lukebana. O seu objectivo é muito simples: Criar o front-end do teu website de forma rápida e simples. Posteriormente será integrado com o Okyhub (Gerador de APIs) para que se crie o front-end e back-end ao mesmo tempo e sem muita complexidade.`,
        technologies: ['HTML 89.5%', 'JavaScript 9.5%', 'CSS 1.0%'],
        image: 'https://github.com/LUK3D-Angola/IC-InteractiveConstructor/raw/master/screenshot8.png'
    },
])

const timeline: Array<IWorkExperience> = reactive([
    {
        startDate: 'September 2022',
        endDate: 'December 2022',
        role: 'Frontend Developer  🔥',
        company: 'Tagleaf',
        description: 'I have worked remotely as a Frontend developer on US based Company called Tagleaf for 2 months (Time that was required to create de sistem) on a team composed of 3 Software Engineers, where I used my skills as Designer and Fronted Dev to build modern and user friendly interface for a report tracking system.',
        technologies: ['TypeScript', 'Vuejs', 'TailwindCss', 'Nodejs', 'Php', 'Laravel'],
    },
    {
        startDate: 'January 2021',
        endDate: 'December 2022',
        role: 'Fullstack Web and Mobile Developer  🔥',
        company: 'Liralink Technologies',
        description: 'As a fullstack developer, my work consisted on creating, maintaining and deploying Web applications for large companies such as Banks and others. I also Worked on mobile applications using Drt and Flutter. ',
        technologies: ['C#', 'Asp.net Core', 'SQL Server', 'TypeScript', 'Vuejs', 'TailwindCss', 'Nodejs', 'Flutter', 'Rest API', 'Php', 'Laravel'],
    },
    {
        startDate: 'June 2018',
        endDate: 'August 2021',
        role: 'Fullstack Web, Mobile and Desktop Dev 🔥',
        company: 'Ramossoft Technologies',
        description: 'I have developed several web based system to large companies such as Angolan Airline company (TAAG) and others. I have worked on a mobile application for music streaming and on Some Desktop Application to collect Schools information. ',
        technologies: ['TypeScript', 'Vuejs', 'CSS', 'SCSS', 'Nodejs', 'Rest API', 'Php', 'Laravel', 'Electron.js', 'C#']
    },
    {
        startDate: 'September 2016',
        endDate: 'June 2018',
        role: 'Instructor',
        company: 'Instituto de Telecomunicações',
        description: 'I worked as a Game development trainer.',
        technologies: ['Unity', 'Blender3D', 'Zbrush', 'C#']
    },

])



</script>
<template >
    <div class="px-2 pl-5 lg:px-20 py-5 flex flex-col min-h-400" id="works">


        <div class="flex w-full mt-10 flex-col lg:flex-row ">
            <ul class="w-4/4 lg:w-2/4 flex flex-col">
                <li>
                    <p class="text-2xl font-bold my-5">🚀 Professional Timeline</p>
                </li>
                <li v-for="(registry, index) in timeline" :key="'work_' + index" v-motion-slide-visible-bottom
                    :delay="300" class="workbox flex flex-col relative border-l-2 p-2 p-10 pb-20 pt-5">

                    <div class="absolute -left-4.5 top-0 flex items-center">
                        <button class="bg-ll-text text-white p-1 rounded-full bg-opacity-35 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                            </svg>
                        </button>
                        <div class="ml-4 flex items-center">
                            <p class="bg-ll-text rounded-lg text-white px-2 text-sm lg:text-lg"> {{
                                registry.startDate
                            }}</p>
                            <p class="ml-10">{{ registry.role }}</p>
                        </div>
                    </div>

                    <div
                        class="w-[100%] lg:w-[90%] min-h-40 bg-white mt-8 rounded-md   lg:ml-5 flex flex-col p-5 text-sm">
                        <div class="flex items-center">

                            <p>Company:
                            </p>
                            <p class=" ml-2 bg-ll-text bg-opacity-25 px-2 py-1 rounded-md">{{
                                registry.company
                            }}</p>
                        </div>


                        <p class="mt-4">
                            {{ registry.description }}
                        </p>

                        <div class="flex items-center w-full flex-wrap mt-5">
                            <span v-for="(tech, index) in registry.technologies" :key="index"
                                class="mr-2 px-2 bg-yellow-400 rounded-md text-yellow-500 bg-opacity-25 mb-2">{{
                                    tech
                                }}</span>
                        </div>
                    </div>

                </li>
            </ul>

            <ul class="w-4/4 lg:w-2/4 flex flex-col">
                <li>
                    <p class="text-2xl font-bold my-5">🚀 Personal Projects</p>
                </li>
                <li v-for="(registry, index) in projectsTimeline" :key="'work2_' + index" v-motion-slide-visible-bottom
                    :delay="300" class="workbox flex flex-col relative border-l-2 p-2 p-10 pb-20 pt-5">

                    <div class="absolute -left-4.5 top-0 flex items-center">
                        <button class="bg-ll-text text-white p-1 rounded-full bg-opacity-35">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                            </svg>
                        </button>
                        <div class="ml-4 flex items-center">
                            <p class="bg-ll-text rounded-lg text-white px-2"> {{ registry.startDate }}</p>
                            <p class="ml-10">{{ registry.title }}</p>
                        </div>
                    </div>

                    <div
                        class="w-full lg:w-[90%] min-h-40 bg-white mt-8 rounded-md  lg:ml-5 flex flex-col p-2 lg:p-5 text-sm">

                        <p class="mt-4">
                            {{ registry.description }}
                        </p>

                        <div class="w-full py-4">
                            <img :src="registry.image" alt="" class="rounded-md border-2 max-h-[300px] object-cover">
                        </div>

                        <div class="social flex items-center " v-motion-slide-bottom :delay="800">
                            <!-- Github -->
                            <div v-if="registry.github" class="group relative mr-4">
                                <button
                                    class=" active:scale-95 transform bg-white border rounded-full p-3 group-hover:bg-ll-primary group-hover:text-white transition-all group-hover:shadow-xl shadow-blue-200">
                                    <a :href="registry.github" target="_blank">
                                        <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1"
                                            data-view-component="true" class="w-6 h-6 fill-current">
                                            <path fill-rule="evenodd"
                                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
                                            </path>
                                        </svg>
                                    </a>
                                </button>
                                <div
                                    class="  flex flex-col absolute -top-14 rounded-md origin-bottom-left transform scale-0 group-hover:scale-100 transition-transform">
                                    <div class="  bg-white   rounded-md px-5 py-2 text-sm shadow-xl  shadow-blue-200">
                                        <p class="whitespace-nowrap">{{ registry.github }}</p>
                                    </div>
                                    <div class="absolute left-4 -bottom-2.5  transform rotate-45  w-5 h-5 bg-white">

                                    </div>
                                </div>
                            </div>
                            <!-- External -->
                            <div v-if="registry.preview" class="group relative mr-4">
                                <button
                                    class=" active:scale-95 transform bg-white border rounded-full p-3 group-hover:bg-ll-primary group-hover:text-white transition-all group-hover:shadow-xl shadow-blue-200">
                                    <a :href="'http://' + registry.preview" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg>
                                    </a>

                                </button>
                                <div
                                    class="   flex flex-col absolute -top-14 rounded-md origin-bottom-left transform scale-0 group-hover:scale-100 transition-transform">
                                    <div
                                        class=" whitespace-nowrap  bg-white   rounded-md px-5 py-2 text-sm shadow-xl  shadow-blue-200">
                                        <p>{{ registry.preview }}</p>
                                    </div>
                                    <div class="absolute left-4 -bottom-2.5  transform rotate-45  w-5 h-5 bg-white">

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="flex items-center w-full flex-wrap mt-5">
                            <span v-for="(tech, index) in registry.technologies" :key="index"
                                class="mr-2 px-2 bg-yellow-400 rounded-md text-yellow-500 bg-opacity-25 mb-2">{{
    tech
                                }}</span>
                        </div>
                    </div>

                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
export default {



}
</script>
