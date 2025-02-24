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
    <div className="w-full rounded-3xl shadow-lg border border-gray-200 base:mx-8 pb-8 relative z-20 bg-white">
      <div className="flex-shrink-0">
        <div className="px-10 pb-12 mt-8">
          <div className="flex flex-row items-top justify-start h-32">
            <a
              className="absolute left-0 text-4xl base:text-6xl cursor-pointer w-2/3"
              href={beneficiary.url}
              target="_blank"
            >
              {beneficiary.name}
            </a>
            <p className="absolute right-0 text-2xl font-light">0{beneficiaryIndex + 1}/05</p>
          </div>
          <div className="space-y-5 h-full base:h-104 mt-12">
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
            </p>
            <p>
              <a
                className="text-blue-900 cursor-pointer text-xl"
                href={beneficiary.url}
                target="_blank"
              >
                Visit the organization
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
