import { userApi } from "@/api/module/user"

const Home = ()=> {
  const login = async() =>{
    const { data,} = await userApi.login()
    console.log(data)
  }

  return(<h1 className="text-3xl font-bold underline">
  Hello world!
</h1>)
}

export default Home