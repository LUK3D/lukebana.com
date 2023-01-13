<script setup lang="ts">
import cssinmotion from '../../assets/images/cssinmotion.png';
import hivyspace from '../../assets/images/hivyspace.png';



</script>
<template >
    <div class="w-full h-screen    flex flex-col px-2 lg:px-10  relative mb-120 lg:mb-0">

        <div class="w-full h-400 flex-col lg:flex-row flex relative items-center justify-center">


            <div class="absolute lg:w-200 h-200 bg-white rounded-full opacity-45"></div>


            <div class="w-4/4 lg:w-2/4 h-full p-5 lg:p-10 flex flex-col justify-center items-start relative">
                <p v-motion-slide-bottom :delay="200" class="mt-20">Hello I'm</p>
                <p class="text-4xl lg:text-8xl font-black" v-motion-slide-bottom :delay="400"><span
                        class="text-black ">Luke</span>bana</p>
                <p class="opacity-80 mb-30 lg:mb-0" v-motion-slide-bottom :delay="500">Software developer with 8 years
                    of
                    experience,
                    building and delivering hight
                    quality projects to the
                    open source community and passionate on building tools that changes the way we work.</p>

                <div class="social flex items-center bottom-4 absolute" v-motion-slide-bottom :delay="800">
                    <!-- Github -->
                    <div class="group relative mr-4">
                        <button
                            class=" active:scale-95 transform bg-white rounded-full p-3 group-hover:bg-ll-primary group-hover:text-white transition-all group-hover:shadow-xl shadow-blue-200">
                            <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"
                                class="w-6 h-6 fill-current">
                                <path fill-rule="evenodd"
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
                                </path>
                            </svg>
                        </button>
                        <div
                            class="  flex flex-col absolute -top-14 rounded-md origin-bottom-left transform scale-0 group-hover:scale-100 transition-transform">
                            <div class="  bg-white   rounded-md px-5 py-2 text-sm shadow-xl  shadow-blue-200">
                                <p>www.github.com/LUK3D</p>
                            </div>
                            <div class="absolute left-4 -bottom-2.5  transform rotate-45  w-5 h-5 bg-white">

                            </div>
                        </div>
                    </div>
                    <!-- Linkedin -->
                    <div class="group relative mr-4">
                        <button
                            class=" active:scale-95 transform bg-white rounded-full p-3 group-hover:bg-ll-primary group-hover:text-white transition-all group-hover:shadow-xl shadow-blue-200">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                <path
                                    d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z">
                                </path>
                            </svg>
                        </button>
                        <div
                            class="   flex flex-col absolute -top-14 rounded-md origin-bottom-left transform scale-0 group-hover:scale-100 transition-transform">
                            <div
                                class=" whitespace-nowrap  bg-white   rounded-md px-5 py-2 text-sm shadow-xl  shadow-blue-200">
                                <p>www.linkedin.com/in/filipe-lukebana-luk3d</p>
                            </div>
                            <div class="absolute left-4 -bottom-2.5  transform rotate-45  w-5 h-5 bg-white">

                            </div>
                        </div>
                    </div>
                    <!-- Email -->
                    <div class="group relative mr-4">
                        <button
                            class=" active:scale-95 transform bg-white rounded-full p-3 group-hover:bg-ll-primary group-hover:text-white transition-all group-hover:shadow-xl shadow-blue-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </button>
                        <div
                            class="  flex flex-col absolute -top-14 rounded-md origin-bottom-left transform scale-0 group-hover:scale-100 transition-transform">
                            <div class="  bg-white   rounded-md px-5 py-2 text-sm shadow-xl  shadow-blue-200">
                                <p>filipelukebana@gmail.com</p>
                            </div>
                            <div class="absolute left-4 -bottom-2.5  transform rotate-45  w-5 h-5 bg-white">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" w-4/4 lg:w-2/4 h-full p-2 lg:p-10 flex flex-col justify-center items-start grid grid-cols-2">
                <div class="col-span-1 h-full flex flex-col justify-around items-center ">
                    <div class="lg:w-3/4 h-40  rounded-2xl border-2 border-white p-1 flex flex-col items-center relative group"
                        v-motion-slide-bottom :delay="600">
                        <div class="w-full bg-white h-full rounded-xl  flex flex-col overflow-hidden">
                            <img :src="cssinmotion"
                                class="w-full h-full object-cover group-hover:scale-110 transform transition-transform"
                                alt="">
                        </div>
                        <button class="absolute -bottom-15 bg-white px-5 py-3 shadow-2xl rounded-xl w-full ">
                            <p>UI/UX
                                Designer</p>
                            <span class="w-3 h-3 bg-ll-text absolute -top-1 rounded-full"></span>
                            <span class="w-5 h-1 bg-ll-text absolute -top-0 -ml-1 rounded-full"></span>

                        </button>
                    </div>
                    <div class="mt-80 lg:mt-0 lg:w-3/4 h-40  rounded-2xl border-2 border-white p-1 flex flex-col items-center relative group"
                        v-motion-slide-bottom :delay="700">
                        <div class="w-full bg-white h-full rounded-xl overflow-hidden">
                            <img :src="hivyspace"
                                class="w-full h-full object-cover group-hover:scale-110 transform transition-transform"
                                alt="">
                        </div>
                        <button class="absolute -bottom-15 bg-white px-5 py-3 shadow-2xl rounded-xl w-full ">
                            <p>Vue.js Projects</p>
                            <span class="w-3 h-3 bg-ll-text absolute -top-1 rounded-full"></span>
                            <span class="w-5 h-1 bg-ll-text absolute -top-0 -ml-1 rounded-full"></span>

                        </button>
                    </div>
                </div>
                <div class="col-span-1 h-full flex flex-col justify-center items-center" v-motion-slide-bottom
                    :delay="800">
                    <div
                        class="w-4/4  lg:w-3/4 h-40  mt-5 lg:mt-0 rounded-2xl border-2 border-white p-1 flex flex-col items-center relative">
                        <div class="w-full bg-white h-full rounded-xl ">

                        </div>
                        <button class="absolute -bottom-15 bg-white px-5 py-3 shadow-2xl rounded-xl w-full ">
                            <p>3D designer</p>
                            <span class="w-3 h-3 bg-ll-text absolute -top-1 rounded-full"></span>
                            <span class="w-5 h-1 bg-ll-text absolute -top-0 -ml-1 rounded-full"></span>

                        </button>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>
<script lang="ts">

</script>
