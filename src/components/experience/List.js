import './List.css'

const List = () => {
    return (
        <div className='ListApp'>
            <div class="max-w-lg rounded overflow-hidden shadow-lg bg-zinc-100">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 font-mono">Hiii, i'm Nuka</div>
                <p class="text-gray-700 text-base text-justify">
                    I am a junior frontend web developer. I live in Yogyakarta. I graduated from Informatics Engineering with a concentration in Computer Science at Dian Nuswantoro University in 2016 - 2022. I have been working as a web frontend for less than 18 months. I know Frontend from my first internship at an email automation company in Semarang. Currently I work at PT. Widya Innovation Indonesia as Junior Frontend Developer.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Vue.Js</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Electron</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Nuxt.Js</span>
              </div>
            </div>
        </div>
    )
}

export default List