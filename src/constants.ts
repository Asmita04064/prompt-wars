export interface ElectionPhase {
  id: string;
  title: string;
  description: string;
  stakeholders: string[];
  issues: string[];
  details: string;
}

export interface Candidate {
  id: string;
  name: string;
  party: string;
  education: string;
  assets: string;
  criminalCases: number;
  vision: string;
}

export const ELECTION_PHASES: ElectionPhase[] = [
  {
    id: "pre-election",
    title: "Pre-Election",
    description: "Voter registration, delimitation, and candidate nominations.",
    stakeholders: ["Election Commission", "Political Parties", "Citizens"],
    issues: ["Voter exclusion", "Gerrymandering", "Bureaucratic hurdles"],
    details: "The process begins with updating electoral rolls and defining constituency boundaries (delimitation). Candidates file nominations, which are scrutinized by electoral officers."
  },
  {
    id: "campaigning",
    title: "Campaigning",
    description: "Political strategies, media influence, and funding.",
    stakeholders: ["Candidates", "PR Agencies", "Media Houses", "Donors"],
    issues: ["Paid news", "Hate speech", "Opaque funding", "Digital echo chambers"],
    details: "Parties use rallies, social media, and traditional ads to influence voters. Campaign finance laws attempt to limit spending, but 'hidden' costs remain significant."
  },
  {
    id: "voting",
    title: "Voting Day",
    description: "EVMs, VVPAT, and security measures.",
    stakeholders: ["Voters", "Polling Officers", "Security Forces"],
    issues: ["Voter apathy", "Intimidation", "Logistical failures"],
    details: "Voters use Electronic Voting Machines (EVMs) with Voter Verifiable Paper Audit Trail (VVPAT) for transparency. Central forces often guard sensitive booths."
  },
  {
    id: "counting",
    title: "Counting & Results",
    description: "Tallying the votes and announcing winners.",
    stakeholders: ["Counting Agents", "Election Commission", "Media"],
    issues: ["Slow data relay", "Allegations of tampering", "Post-poll violence"],
    details: "Votes are counted under strict surveillance. The VVPAT slips can be cross-verified in selected booths to ensure EVM integrity."
  }
];

export const COMPARISON_DATA = {
  transparency: {
    india: "High - Use of VVPAT and transparent counting process.",
    us: "Mixed - Varying state laws; reliance on both digital and paper ballots."
  },
  efficiency: {
    india: "High - Centralized control (ECI) allows for uniform execution.",
    us: "Moderate - Decentralized system leads to local bottlenecks."
  },
  accessibility: {
    india: "Very High - Polling booth within 2km of every voter.",
    us: "Mixed - Voter ID laws and mail-in ballot debates affect access."
  },
  trust: {
    india: "Varies - Strong trust in ECI, but political polarized discourse.",
    us: "Declining - Increasing skepticism after recent contested results."
  }
};
