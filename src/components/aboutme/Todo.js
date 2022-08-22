import './Todo.css'
import logo from '../../done.png'
import Else from '.././experience/List'
const Todo = () => {
    return (
        <div className='TodoApp'>
            <div class="max-w-lg rounded overflow-hidden shadow-lg bg-zinc-100">
              <img class="mx-auto object-center p-10" src={logo}  alt="logo" />
              <div class="px-6 py-3">
                <div class="font-bold text-xl mb-2">Hello, I'm as Frontend Web Developer</div>
                <p class="text-gray-700 text-base text-justify">
                Front end development is the area of web development that focuses on the user interface. It is all about converting the backend code into a graphical interface. The front end makes the data easy to read and understand. It’s the frontend design that attracts the audience to your website and asks them to stay there for a longer time interval.
                <br /><br/>
                Front end development makes things easier for people to understand those who are from non-coding backgrounds. Without frontend, websites will only show the codes which will complicate the task.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HTML</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#CSS</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#JavaScript</span>
              </div>
            </div>
            <Else></Else>
        </div>
    )
}

export default Todo