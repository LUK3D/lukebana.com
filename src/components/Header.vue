<script lang="ts" setup>
</script>
<template >
    <div class="w-full h-14 backdrop-blur-lg bg-white/60  fixed flex items-center justify-between px-10 right-0 top-0">
        <p class="font-black text-ll-text">lukebana.<span class="text-ll-primary">com</span></p>
        <ul class=" justify-center items-center w-full hidden md:flex">
            <li class="transition-all group mx-4  flex flex-col items-center relative cursor-pointer select-none">
                <a href="#" class="transition-all group-hover:text-ll-primary">About me</a>
                <div
                    class="transition-all  line w-0 group-hover:w-2/4 h-1 bg-ll-primary rounded-md mt-2 absolute -bottom-2">
                </div>
            </li>
            <li class="transition-all group mx-4  flex flex-col items-center relative cursor-pointer select-none">
                <a href="#works" class="transition-all group-hover:text-ll-primary">Works</a>
                <div
                    class="transition-all  line w-0 group-hover:w-2/4 h-1 bg-ll-primary rounded-md mt-2 absolute -bottom-2">
                </div>
            </li>
            <li class="transition-all group mx-4  flex flex-col items-center relative cursor-pointer select-none">
                <a href="#services" class="transition-all group-hover:text-ll-primary">Services</a>
                <div
                    class="transition-all  line w-0 group-hover:w-2/4 h-1 bg-ll-primary rounded-md mt-2 absolute -bottom-2">
                </div>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
export default {

}
</script>
