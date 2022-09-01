import { history, useNavigate, useSearchParams, createSearchParams, useLocation } from 'umi'

export default function user() {
  const navigate = useNavigate()
  
  // 路由传参方式一：useSearchParams
  const [searchParams, setSearchParams] = useSearchParams()
  const a = searchParams.get('a')
  const b = searchParams.get('b')
  
  // 路由传参方式二：useLocation，可以传递state（临时的）
  const location = useLocation()

  return (
    <div>
      <h1>User Page</h1>
      <button onClick={()=> history.back()} > go back by history </button>
      <button onClick={()=> history.push('/')} > go to index by history </button>
      <button onClick={()=> navigate(-1)} > go back by navigate! </button>
      <button onClick={()=> navigate('/')} > go back by navigate! </button>

      <p>SearchParams --- a:{a};b:{b}</p>
      <button onClick={()=>{
        // setSearchParams(createSearchParams({a:123, b:123}))
        setSearchParams({a:123, b:123})
      }}>Jump to a page by set</button>
      <button onClick={()=>{
        navigate(`/user?${createSearchParams({a:12,b:13})}`)
      }} >Navigate to a page</button>

      {/* state */}
      <button onClick={()=>{
        navigate('/user', {
          state:{
            c: 987
          }
        })
      }}
      >go to index has State!</button>
      <p> State --- {location.state?.c} </p>
    </div>
  )
}