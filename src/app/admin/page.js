import AllDemands from "@/components/alldemands";
import DateRangeSelector from "@/components/daterangeselector";

export default function AdminPage() {
    return(
        <>
        <DateRangeSelector />
        <AllDemands />
        </>
    )
}