import { useRouter } from 'next/router'

const RestuarantIndex = () => {
    const router = useRouter()

    const {id} = router.query

    return <div>{id}</div>
}

export default RestuarantIndex