import { BeneficiaryImage } from "./CardBody";
import VoteSlider from "./VoteSlider";

export interface Beneficiary {
  image: BeneficiaryImage;
  url: string;
  name: string;
  impactDesc: string;
  area: string;
  shortDesc: string;
}

interface BeneficiaryCardProps {
  beneficiary: Beneficiary;
  setVotes: Function;
  maxVotes: number;
  assignedVotes: number;
  beneficiaryIndex: number;
}

const BeneficiaryCard: React.FC<BeneficiaryCardProps> = ({
  beneficiary,
  setVotes,
  maxVotes,
  assignedVotes,
  beneficiaryIndex,
}) => {
  return (
    <div className="w-11/12 rounded-xl shadow-lg border border-gray-200 mt-8 pb-8 relative z-20 bg-white">
      <div className="flex-shrink-0">
        <div className="px-10 pb-12 mt-8">
          <div className="flex flex-row items-top justify-between h-32">
            <a
              className="text-6xl cursor-pointer w-2/3"
              href={beneficiary.url}
              target="_blank"
            >
              {beneficiary.name}
            </a>
            <p className="text-2xl font-light">0{beneficiaryIndex + 1}/05</p>
          </div>
          <div className="space-y-8 h-96 mt-12">
            <p className="text-xl font-light tracking-wide">
              <span className="text-xl font-medium mr-1">Impact Area:</span>
              {beneficiary.area}
            </p>
            <p className="text-xl font-light tracking-wide">
              <span className="text-xl font-medium mr-1">Mission:</span>
              {beneficiary.impactDesc}
            </p>
            <p className="text-xl font-light tracking-wide">
              <span className="text-xl font-medium mr-1">Why they pop:</span>
              {beneficiary.shortDesc}
              <a
                className="text-blue-900 cursor-pointer ml-2"
                href={beneficiary.url}
                target="_blank"
              >
                link
              </a>
            </p>
          </div>
          <div className="mt-12">
            <VoteSlider
              setVotes={setVotes}
              maxVotes={maxVotes}
              assignedVotes={assignedVotes}
              beneficiaryIndex={beneficiaryIndex}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BeneficiaryCard;
