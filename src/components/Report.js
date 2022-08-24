import dynamic from "next/dynamic";
import { profileCard, rawDataContainer, reportContainer } from "../styles/Report.styles";
import { DetailsCard } from "./DetailsCard";
const DynamicReactJson = dynamic(import('react-json-view'), { ssr: false });


export function Report({ data }) {
  if(!data) { 
    return <div className="mt-4 text-blue-600">No users found</div>
  }
  return (
    <>
      <h3 className="mt-4 text-lg">User Details</h3>
      <div className={reportContainer}> 
        <div className={profileCard}>
          <div className="flex mb-2">
            <img src={data.userData?.profile_image_url} className="rounded-xl" />
            <div className="ml-2">{data.userData.name}</div>
          </div>
          <div>{data.userData.description}</div>
          <div>{data.userData.location}</div>
        </div>
        <DetailsCard data={data}/>
      </div>
    </>
  )
}