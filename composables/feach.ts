
  
type URL = string | Request |Function;

   class axios{

        async Get(Api: URL,querys: string){
            const Api_Url:string = await Api+'?'+querys;
            const GET = await useFetch(`${Api_Url}`,{
                method: 'GET',
             });
             return GET;
        }

        async Post(Api: URL,body:{[key:string|number]:any}){
            const Api_Url:URL = await Api;
            const POST = await  useFetch(`${Api_Url}`,{
                method: 'POST',
                body
             });
                return POST;
        }

        async Put(Api: URL,body:{[key:string|number]:any}){
            const Api_Url:URL = await Api;
            const PUT = await  useFetch(`${Api_Url}`,{
                method: 'PUT',
                body
             });
                return PUT;
        }

        async Delete(Api: URL,body:{[key:string|number]:any}){
            const Api_Url:URL = await Api;
            const DELETE = await  useFetch(`${Api_Url}`,{
                method: 'DELETE',
                body
             });
                return DELETE;
        }
    }

    const $axios = new axios();
    export default $axios;
