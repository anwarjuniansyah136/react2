export default function Header(){
    return(
        <div>
            <div className="flex w-full border-b-4 border-black space-x-6 bg-slate-500">
                <div className="p-2 ml-4">
                    <img className="w-16 h-16 rounded-full" src="https://tse1.mm.bing.net/th?id=OIP.YFaTmfzCvQjbfWv9PYJVAwHaFE&pid=Api&P=0&h=180" alt="" />
                    <p className="text-sm font-bold text-white">Elektonik</p>
                </div>
                <div className="flex justify-center items-center">
                    <h1 className="text-4xl font-bold text-white">Toko Elektronik</h1>
                </div>
            </div>
        </div>
    )
}