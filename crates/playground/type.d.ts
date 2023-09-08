export type Maybe<T> = T | null;
type ExampleQuery = {viewer:{login:string;}}
export type Base64String = number;
export type BigInt = number;
export type Date = number;
export type DateTime = number;
export type GitObjectID = number;
export type GitRefname = number;
export type GitSSHRemote = number;
export type GitTimestamp = number;
export type HTML = number;
export type PreciseDateTime = number;
export type URI = number;
export type X509Certificate = number;
export type AbortQueuedMigrationsInput = {
  clientMutationId?: Maybe<string>;
  ownerId: string;
}
export interface AbortQueuedMigrationsPayload {
  clientMutationId?: Maybe<string>;
  success?: Maybe<Boolean>;
}
export type AcceptEnterpriseAdministratorInvitationInput = {
  clientMutationId?: Maybe<string>;
  invitationId: string;
}
export interface AcceptEnterpriseAdministratorInvitationPayload {
  clientMutationId?: Maybe<string>;
  invitation?: Maybe<EnterpriseAdministratorInvitation>;
  message?: Maybe<string>;
}
export type AcceptTopicSuggestionInput = {
  clientMutationId?: Maybe<string>;
  name: string;
  repositoryId: string;
}
export interface AcceptTopicSuggestionPayload {
  clientMutationId?: Maybe<string>;
  topic?: Maybe<Topic>;
}
export interface Actor {
  avatarUrl: URI;
  login: string;
  resourcePath: URI;
  url: URI;
}
export interface ActorLocation {
  city?: Maybe<string>;
  country?: Maybe<string>;
  countryCode?: Maybe<string>;
  region?: Maybe<string>;
  regionCode?: Maybe<string>;
}
export interface ActorAvatarUrlArgs{
  size: Maybe<number>;
}
export enum ActorType {
  TEAM,
  USER,
}
export type AddAssigneesToAssignableInput = {
  assignableId: string;
  assigneeIds: Array<string>;
  clientMutationId?: Maybe<string>;
}
export interface AddAssigneesToAssignablePayload {
  assignable?: Maybe<Assignable>;
  clientMutationId?: Maybe<string>;
}
export type AddCommentInput = {
  body: string;
  clientMutationId?: Maybe<string>;
  subjectId: string;
}
export interface AddCommentPayload {
  clientMutationId?: Maybe<string>;
  commentEdge?: Maybe<IssueCommentEdge>;
  subject?: Maybe<Node>;
  timelineEdge?: Maybe<IssueTimelineItemEdge>;
}
export type AddDiscussionCommentInput = {
  body: string;
  clientMutationId?: Maybe<string>;
  discussionId: string;
  replyToId?: Maybe<string>;
}
export interface AddDiscussionCommentPayload {
  clientMutationId?: Maybe<string>;
  comment?: Maybe<DiscussionComment>;
}
export type AddDiscussionPollVoteInput = {
  clientMutationId?: Maybe<string>;
  pollOptionId: string;
}
export interface AddDiscussionPollVotePayload {
  clientMutationId?: Maybe<string>;
  pollOption?: Maybe<DiscussionPollOption>;
}
export type AddEnterpriseOrganizationMemberInput = {
  clientMutationId?: Maybe<string>;
  enterpriseId: string;
  organizationId: string;
  role?: Maybe<OrganizationMemberRole>;
  userIds: Array<string>;
}
export interface AddEnterpriseOrganizationMemberPayload {
  clientMutationId?: Maybe<string>;
  users?: Maybe<Array<User>>;
}
export type AddEnterpriseSupportEntitlementInput = {
  clientMutationId?: Maybe<string>;
  enterpriseId: string;
  login: string;
}
export interface AddEnterpriseSupportEntitlementPayload {
  clientMutationId?: Maybe<string>;
  message?: Maybe<string>;
}
export type AddLabelsToLabelableInput = {
  clientMutationId?: Maybe<string>;
  labelIds: Array<string>;
  labelableId: string;
}
export interface AddLabelsToLabelablePayload {
  clientMutationId?: Maybe<string>;
  labelable?: Maybe<Labelable>;
}
export type AddProjectCardInput = {
  clientMutationId?: Maybe<string>;
  contentId?: Maybe<string>;
  note?: Maybe<string>;
  projectColumnId: string;
}
export interface AddProjectCardPayload {
  cardEdge?: Maybe<ProjectCardEdge>;
  clientMutationId?: Maybe<string>;
  projectColumn?: Maybe<ProjectColumn>;
}
export type AddProjectColumnInput = {
  clientMutationId?: Maybe<string>;
  name: string;
  projectId: string;
}
export interface AddProjectColumnPayload {
  clientMutationId?: Maybe<string>;
  columnEdge?: Maybe<ProjectColumnEdge>;
  project?: Maybe<Project>;
}
export type AddProjectV2DraftIssueInput = {
  assigneeIds?: Maybe<Array<string>>;
  body?: Maybe<string>;
  clientMutationId?: Maybe<string>;
  projectId: string;
  title: string;
}
export interface AddProjectV2DraftIssuePayload {
  clientMutationId?: Maybe<string>;
  projectItem?: Maybe<ProjectV2Item>;
}
export type AddProjectV2ItemByIdInput = {
  clientMutationId?: Maybe<string>;
  contentId: string;
  projectId: string;
}
export interface AddProjectV2ItemByIdPayload {
  clientMutationId?: Maybe<string>;
  item?: Maybe<ProjectV2Item>;
}
export type AddPullRequestReviewCommentInput = {
  body?: Maybe<string>;
  clientMutationId?: Maybe<string>;
  commitOID?: Maybe<GitObjectID>;
  inReplyTo?: Maybe<string>;
  path?: Maybe<string>;
  position?: Maybe<number>;
  pullRequestId?: Maybe<string>;
  pullRequestReviewId?: Maybe<string>;
}
export interface AddPullRequestReviewCommentPayload {
  clientMutationId?: Maybe<string>;
  comment?: Maybe<PullRequestReviewComment>;
  commentEdge?: Maybe<PullRequestReviewCommentEdge>;
}
export type AddPullRequestReviewInput = {
  body?: Maybe<string>;
  clientMutationId?: Maybe<string>;
  comments?: Maybe<Array<Maybe<DraftPullRequestReviewComment>>>;
  commitOID?: Maybe<GitObjectID>;
  event?: Maybe<PullRequestReviewEvent>;
  pullRequestId: string;
  threads?: Maybe<Array<Maybe<DraftPullRequestReviewThread>>>;
}
export interface AddPullRequestReviewPayload {
  clientMutationId?: Maybe<string>;
  pullRequestReview?: Maybe<PullRequestReview>;
  reviewEdge?: Maybe<PullRequestReviewEdge>;
}
export type AddPullRequestReviewThreadInput = {
  body: string;
  clientMutationId?: Maybe<string>;
  line?: Maybe<number>;
  path: string;
  pullRequestId?: Maybe<string>;
  pullRequestReviewId?: Maybe<string>;
  side?: Maybe<DiffSide>;
  startLine?: Maybe<number>;
  startSide?: Maybe<DiffSide>;
  subjectType?: Maybe<PullRequestReviewThreadSubjectType>;
}
export interface AddPullRequestReviewThreadPayload {
  clientMutationId?: Maybe<string>;
  thread?: Maybe<PullRequestReviewThread>;
}
export type AddPullRequestReviewThreadReplyInput = {
  body: string;
  clientMutationId?: Maybe<string>;
  pullRequestReviewId?: Maybe<string>;
  pullRequestReviewThreadId: string;
}
export interface AddPullRequestReviewThreadReplyPayload {
  clientMutationId?: Maybe<string>;
  comment?: Maybe<PullRequestReviewComment>;
}
export type AddReactionInput = {
  clientMutationId?: Maybe<string>;
  content: ReactionContent;
  subjectId: string;
}
export interface AddReactionPayload {
  clientMutationId?: Maybe<string>;
  reaction?: Maybe<Reaction>;
  reactionGroups?: Maybe<Array<ReactionGroup>>;
  subject?: Maybe<Reactable>;
}
export type AddStarInput = {
  clientMutationId?: Maybe<string>;
  starrableId: string;
}
export interface AddStarPayload {
  clientMutationId?: Maybe<string>;
  starrable?: Maybe<Starrable>;
}
export type AddUpvoteInput = {
  clientMutationId?: Maybe<string>;
  subjectId: string;
}
export interface AddUpvotePayload {
  clientMutationId?: Maybe<string>;
  subject?: Maybe<Votable>;
}
export type AddVerifiableDomainInput = {
  clientMutationId?: Maybe<string>;
  domain: URI;
  ownerId: string;
}
export interface AddVerifiableDomainPayload {
  clientMutationId?: Maybe<string>;
  domain?: Maybe<VerifiableDomain>;
}
export type AddedToMergeQueueEvent = Node &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  enqueuer?: Maybe<User>;
  id: string;
  mergeQueue?: Maybe<MergeQueue>;
  pullRequest?: Maybe<PullRequest>;
}
export type AddedToProjectEvent = Node &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  databaseId?: Maybe<number>;
  id: string;
  project?: Maybe<Project>;
  projectCard?: Maybe<ProjectCard>;
  projectColumnName: string;
}
export interface AnnouncementBanner {
  announcement?: Maybe<string>;
  announcementExpiresAt?: Maybe<DateTime>;
  announcementUserDismissible?: Maybe<Boolean>;
}
export type App = Node &  {
  createdAt: DateTime;
  databaseId?: Maybe<number>;
  description?: Maybe<string>;
  id: string;
  ipAllowListEntries: IpAllowListEntryConnection;
  logoBackgroundColor: string;
  logoUrl: URI;
  name: string;
  slug: string;
  updatedAt: DateTime;
  url: URI;
}
export interface AppIpAllowListEntriesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<IpAllowListEntryOrder>;
}
export interface AppLogoUrlArgs{
  size: Maybe<number>;
}
export type ApproveDeploymentsInput = {
  clientMutationId?: Maybe<string>;
  comment?: Maybe<string>;
  environmentIds: Array<string>;
  workflowRunId: string;
}
export interface ApproveDeploymentsPayload {
  clientMutationId?: Maybe<string>;
  deployments?: Maybe<Array<Deployment>>;
}
export type ApproveVerifiableDomainInput = {
  clientMutationId?: Maybe<string>;
  id: string;
}
export interface ApproveVerifiableDomainPayload {
  clientMutationId?: Maybe<string>;
  domain?: Maybe<VerifiableDomain>;
}
export type ArchiveProjectV2ItemInput = {
  clientMutationId?: Maybe<string>;
  itemId: string;
  projectId: string;
}
export interface ArchiveProjectV2ItemPayload {
  clientMutationId?: Maybe<string>;
  item?: Maybe<ProjectV2Item>;
}
export type ArchiveRepositoryInput = {
  clientMutationId?: Maybe<string>;
  repositoryId: string;
}
export interface ArchiveRepositoryPayload {
  clientMutationId?: Maybe<string>;
  repository?: Maybe<Repository>;
}
export interface Assignable {
  assignees: UserConnection;
}
export type AssignedEvent = Node &  {
  actor?: Maybe<Actor>;
  assignable: Assignable;
  assignee?: Maybe<Assignee>;
  createdAt: DateTime;
  id: string;
  user?: Maybe<User>;
}
export interface AssignableAssigneesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export type Assignee = Bot | Mannequin | Organization | User;
export interface AuditEntry {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  operationType?: Maybe<OperationType>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type AuditEntryActor = Bot | Organization | User;
export type AuditLogOrder = {
  direction?: Maybe<OrderDirection>;
  field?: Maybe<AuditLogOrderField>;
}
export enum AuditLogOrderField {
  CREATED_AT,
}
export type AutoMergeDisabledEvent = Node &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  disabler?: Maybe<User>;
  id: string;
  pullRequest?: Maybe<PullRequest>;
  reason?: Maybe<string>;
  reasonCode?: Maybe<string>;
}
export type AutoMergeEnabledEvent = Node &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  enabler?: Maybe<User>;
  id: string;
  pullRequest?: Maybe<PullRequest>;
}
export interface AutoMergeRequest {
  authorEmail?: Maybe<string>;
  commitBody?: Maybe<string>;
  commitHeadline?: Maybe<string>;
  enabledAt?: Maybe<DateTime>;
  enabledBy?: Maybe<Actor>;
  mergeMethod: PullRequestMergeMethod;
  pullRequest: PullRequest;
}
export type AutoRebaseEnabledEvent = Node &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  enabler?: Maybe<User>;
  id: string;
  pullRequest?: Maybe<PullRequest>;
}
export type AutoSquashEnabledEvent = Node &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  enabler?: Maybe<User>;
  id: string;
  pullRequest?: Maybe<PullRequest>;
}
export type AutomaticBaseChangeFailedEvent = Node &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  id: string;
  newBase: string;
  oldBase: string;
  pullRequest: PullRequest;
}
export type AutomaticBaseChangeSucceededEvent = Node &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  id: string;
  newBase: string;
  oldBase: string;
  pullRequest: PullRequest;
}
export type BaseRefChangedEvent = Node &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  currentRefName: string;
  databaseId?: Maybe<number>;
  id: string;
  previousRefName: string;
  pullRequest: PullRequest;
}
export type BaseRefDeletedEvent = Node &  {
  actor?: Maybe<Actor>;
  baseRefName?: Maybe<string>;
  createdAt: DateTime;
  id: string;
  pullRequest?: Maybe<PullRequest>;
}
export type BaseRefForcePushedEvent = Node &  {
  actor?: Maybe<Actor>;
  afterCommit?: Maybe<Commit>;
  beforeCommit?: Maybe<Commit>;
  createdAt: DateTime;
  id: string;
  pullRequest: PullRequest;
  ref?: Maybe<Ref>;
}
export interface Blame {
  ranges: Array<BlameRange>;
}
export interface BlameRange {
  age: number;
  commit: Commit;
  endingLine: number;
  startingLine: number;
}
export type Blob = GitObject & Node &  {
  abbreviatedOid: string;
  byteSize: number;
  commitResourcePath: URI;
  commitUrl: URI;
  id: string;
  isBinary?: Maybe<Boolean>;
  isTruncated: Boolean;
  oid: GitObjectID;
  repository: Repository;
  text?: Maybe<string>;
}
export type Bot = Actor & Node & UniformResourceLocatable &  {
  avatarUrl: URI;
  createdAt: DateTime;
  databaseId?: Maybe<number>;
  id: string;
  login: string;
  resourcePath: URI;
  updatedAt: DateTime;
  url: URI;
}
export interface BotAvatarUrlArgs{
  size: Maybe<number>;
}
export type BranchActorAllowanceActor = App | Team | User;
export interface BranchNamePatternParameters {
  name?: Maybe<string>;
  negate: Boolean;
  operator: string;
  pattern: string;
}
export type BranchNamePatternParametersInput = {
  name?: Maybe<string>;
  negate?: Maybe<Boolean>;
  operator: string;
  pattern: string;
}
export type BranchProtectionRule = Node &  {
  allowsDeletions: Boolean;
  allowsForcePushes: Boolean;
  blocksCreations: Boolean;
  branchProtectionRuleConflicts: BranchProtectionRuleConflictConnection;
  bypassForcePushAllowances: BypassForcePushAllowanceConnection;
  bypassPullRequestAllowances: BypassPullRequestAllowanceConnection;
  creator?: Maybe<Actor>;
  databaseId?: Maybe<number>;
  dismissesStaleReviews: Boolean;
  id: string;
  isAdminEnforced: Boolean;
  lockAllowsFetchAndMerge: Boolean;
  lockBranch: Boolean;
  matchingRefs: RefConnection;
  pattern: string;
  pushAllowances: PushAllowanceConnection;
  repository?: Maybe<Repository>;
  requireLastPushApproval: Boolean;
  requiredApprovingReviewCount?: Maybe<number>;
  requiredDeploymentEnvironments?: Maybe<Array<Maybe<string>>>;
  requiredStatusCheckContexts?: Maybe<Array<Maybe<string>>>;
  requiredStatusChecks?: Maybe<Array<RequiredStatusCheckDescription>>;
  requiresApprovingReviews: Boolean;
  requiresCodeOwnerReviews: Boolean;
  requiresCommitSignatures: Boolean;
  requiresConversationResolution: Boolean;
  requiresDeployments: Boolean;
  requiresLinearHistory: Boolean;
  requiresStatusChecks: Boolean;
  requiresStrictStatusChecks: Boolean;
  restrictsPushes: Boolean;
  restrictsReviewDismissals: Boolean;
  reviewDismissalAllowances: ReviewDismissalAllowanceConnection;
}
export interface BranchProtectionRuleBranchProtectionRuleConflictsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface BranchProtectionRuleBypassForcePushAllowancesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface BranchProtectionRuleBypassPullRequestAllowancesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface BranchProtectionRuleMatchingRefsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  query: Maybe<string>;
}
export interface BranchProtectionRulePushAllowancesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface BranchProtectionRuleReviewDismissalAllowancesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface BranchProtectionRuleConflict {
  branchProtectionRule?: Maybe<BranchProtectionRule>;
  conflictingBranchProtectionRule?: Maybe<BranchProtectionRule>;
  ref?: Maybe<Ref>;
}
export interface BranchProtectionRuleConflictConnection {
  edges?: Maybe<Array<Maybe<BranchProtectionRuleConflictEdge>>>;
  nodes?: Maybe<Array<Maybe<BranchProtectionRuleConflict>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface BranchProtectionRuleConflictEdge {
  cursor: string;
  node?: Maybe<BranchProtectionRuleConflict>;
}
export interface BranchProtectionRuleConnection {
  edges?: Maybe<Array<Maybe<BranchProtectionRuleEdge>>>;
  nodes?: Maybe<Array<Maybe<BranchProtectionRule>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface BranchProtectionRuleEdge {
  cursor: string;
  node?: Maybe<BranchProtectionRule>;
}
export type BulkSponsorship = {
  amount: number;
  sponsorableId?: Maybe<string>;
  sponsorableLogin?: Maybe<string>;
}
export type BypassActor = App | Team;
export type BypassForcePushAllowance = Node &  {
  actor?: Maybe<BranchActorAllowanceActor>;
  branchProtectionRule?: Maybe<BranchProtectionRule>;
  id: string;
}
export interface BypassForcePushAllowanceConnection {
  edges?: Maybe<Array<Maybe<BypassForcePushAllowanceEdge>>>;
  nodes?: Maybe<Array<Maybe<BypassForcePushAllowance>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface BypassForcePushAllowanceEdge {
  cursor: string;
  node?: Maybe<BypassForcePushAllowance>;
}
export type BypassPullRequestAllowance = Node &  {
  actor?: Maybe<BranchActorAllowanceActor>;
  branchProtectionRule?: Maybe<BranchProtectionRule>;
  id: string;
}
export interface BypassPullRequestAllowanceConnection {
  edges?: Maybe<Array<Maybe<BypassPullRequestAllowanceEdge>>>;
  nodes?: Maybe<Array<Maybe<BypassPullRequestAllowance>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface BypassPullRequestAllowanceEdge {
  cursor: string;
  node?: Maybe<BypassPullRequestAllowance>;
}
export interface CVSS {
  score: number;
  vectorString?: Maybe<string>;
}
export type CWE = Node &  {
  cweId: string;
  description: string;
  id: string;
  name: string;
}
export interface CWEConnection {
  edges?: Maybe<Array<Maybe<CWEEdge>>>;
  nodes?: Maybe<Array<Maybe<CWE>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface CWEEdge {
  cursor: string;
  node?: Maybe<CWE>;
}
export type CancelEnterpriseAdminInvitationInput = {
  clientMutationId?: Maybe<string>;
  invitationId: string;
}
export interface CancelEnterpriseAdminInvitationPayload {
  clientMutationId?: Maybe<string>;
  invitation?: Maybe<EnterpriseAdministratorInvitation>;
  message?: Maybe<string>;
}
export type CancelSponsorshipInput = {
  clientMutationId?: Maybe<string>;
  sponsorId?: Maybe<string>;
  sponsorLogin?: Maybe<string>;
  sponsorableId?: Maybe<string>;
  sponsorableLogin?: Maybe<string>;
}
export interface CancelSponsorshipPayload {
  clientMutationId?: Maybe<string>;
  sponsorsTier?: Maybe<SponsorsTier>;
}
export type ChangeUserStatusInput = {
  clientMutationId?: Maybe<string>;
  emoji?: Maybe<string>;
  expiresAt?: Maybe<DateTime>;
  limitedAvailability?: Maybe<Boolean>;
  message?: Maybe<string>;
  organizationId?: Maybe<string>;
}
export interface ChangeUserStatusPayload {
  clientMutationId?: Maybe<string>;
  status?: Maybe<UserStatus>;
}
export interface CheckAnnotation {
  annotationLevel?: Maybe<CheckAnnotationLevel>;
  blobUrl: URI;
  databaseId?: Maybe<number>;
  location: CheckAnnotationSpan;
  message: string;
  path: string;
  rawDetails?: Maybe<string>;
  title?: Maybe<string>;
}
export interface CheckAnnotationConnection {
  edges?: Maybe<Array<Maybe<CheckAnnotationEdge>>>;
  nodes?: Maybe<Array<Maybe<CheckAnnotation>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export type CheckAnnotationData = {
  annotationLevel: CheckAnnotationLevel;
  location: CheckAnnotationRange;
  message: string;
  path: string;
  rawDetails?: Maybe<string>;
  title?: Maybe<string>;
}
export interface CheckAnnotationEdge {
  cursor: string;
  node?: Maybe<CheckAnnotation>;
}
export enum CheckAnnotationLevel {
  FAILURE,
  NOTICE,
  WARNING,
}
export interface CheckAnnotationPosition {
  column?: Maybe<number>;
  line: number;
}
export type CheckAnnotationRange = {
  endColumn?: Maybe<number>;
  endLine: number;
  startColumn?: Maybe<number>;
  startLine: number;
}
export interface CheckAnnotationSpan {
  end: CheckAnnotationPosition;
  start: CheckAnnotationPosition;
}
export enum CheckConclusionState {
  ACTION_REQUIRED,
  CANCELLED,
  FAILURE,
  NEUTRAL,
  SKIPPED,
  STALE,
  STARTUP_FAILURE,
  SUCCESS,
  TIMED_OUT,
}
export type CheckRun = Node & RequirableByPullRequest & UniformResourceLocatable &  {
  annotations?: Maybe<CheckAnnotationConnection>;
  checkSuite: CheckSuite;
  completedAt?: Maybe<DateTime>;
  conclusion?: Maybe<CheckConclusionState>;
  databaseId?: Maybe<number>;
  deployment?: Maybe<Deployment>;
  detailsUrl?: Maybe<URI>;
  externalId?: Maybe<string>;
  id: string;
  isRequired: Boolean;
  name: string;
  pendingDeploymentRequest?: Maybe<DeploymentRequest>;
  permalink: URI;
  repository: Repository;
  resourcePath: URI;
  startedAt?: Maybe<DateTime>;
  status: CheckStatusState;
  steps?: Maybe<CheckStepConnection>;
  summary?: Maybe<string>;
  text?: Maybe<string>;
  title?: Maybe<string>;
  url: URI;
}
export interface CheckRunAnnotationsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface CheckRunIsRequiredArgs{
  pullRequestId: Maybe<string>;
  pullRequestNumber: Maybe<number>;
}
export interface CheckRunStepsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  number: Maybe<number>;
}
export type CheckRunAction = {
  description: string;
  identifier: string;
  label: string;
}
export interface CheckRunConnection {
  edges?: Maybe<Array<Maybe<CheckRunEdge>>>;
  nodes?: Maybe<Array<Maybe<CheckRun>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface CheckRunEdge {
  cursor: string;
  node?: Maybe<CheckRun>;
}
export type CheckRunFilter = {
  appId?: Maybe<number>;
  checkName?: Maybe<string>;
  checkType?: Maybe<CheckRunType>;
  conclusions?: Maybe<Array<CheckConclusionState>>;
  status?: Maybe<CheckStatusState>;
  statuses?: Maybe<Array<CheckStatusState>>;
}
export type CheckRunOutput = {
  annotations?: Maybe<Array<CheckAnnotationData>>;
  images?: Maybe<Array<CheckRunOutputImage>>;
  summary: string;
  text?: Maybe<string>;
  title: string;
}
export type CheckRunOutputImage = {
  alt: string;
  caption?: Maybe<string>;
  imageUrl: URI;
}
export enum CheckRunState {
  ACTION_REQUIRED,
  CANCELLED,
  COMPLETED,
  FAILURE,
  IN_PROGRESS,
  NEUTRAL,
  PENDING,
  QUEUED,
  SKIPPED,
  STALE,
  STARTUP_FAILURE,
  SUCCESS,
  TIMED_OUT,
  WAITING,
}
export interface CheckRunStateCount {
  count: number;
  state: CheckRunState;
}
export enum CheckRunType {
  ALL,
  LATEST,
}
export enum CheckStatusState {
  COMPLETED,
  IN_PROGRESS,
  PENDING,
  QUEUED,
  REQUESTED,
  WAITING,
}
export interface CheckStep {
  completedAt?: Maybe<DateTime>;
  conclusion?: Maybe<CheckConclusionState>;
  externalId?: Maybe<string>;
  name: string;
  number: number;
  secondsToCompletion?: Maybe<number>;
  startedAt?: Maybe<DateTime>;
  status: CheckStatusState;
}
export interface CheckStepConnection {
  edges?: Maybe<Array<Maybe<CheckStepEdge>>>;
  nodes?: Maybe<Array<Maybe<CheckStep>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface CheckStepEdge {
  cursor: string;
  node?: Maybe<CheckStep>;
}
export type CheckSuite = Node &  {
  app?: Maybe<App>;
  branch?: Maybe<Ref>;
  checkRuns?: Maybe<CheckRunConnection>;
  commit: Commit;
  conclusion?: Maybe<CheckConclusionState>;
  createdAt: DateTime;
  creator?: Maybe<User>;
  databaseId?: Maybe<number>;
  id: string;
  matchingPullRequests?: Maybe<PullRequestConnection>;
  push?: Maybe<Push>;
  repository: Repository;
  resourcePath: URI;
  status: CheckStatusState;
  updatedAt: DateTime;
  url: URI;
  workflowRun?: Maybe<WorkflowRun>;
}
export interface CheckSuiteCheckRunsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  filterBy: Maybe<CheckRunFilter>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface CheckSuiteMatchingPullRequestsArgs{
  after: Maybe<string>;
  baseRefName: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  headRefName: Maybe<string>;
  labels: Maybe<Array<string>>;
  last: Maybe<number>;
  orderBy: Maybe<IssueOrder>;
  states: Maybe<Array<PullRequestState>>;
}
export type CheckSuiteAutoTriggerPreference = {
  appId: string;
  setting: Boolean;
}
export interface CheckSuiteConnection {
  edges?: Maybe<Array<Maybe<CheckSuiteEdge>>>;
  nodes?: Maybe<Array<Maybe<CheckSuite>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface CheckSuiteEdge {
  cursor: string;
  node?: Maybe<CheckSuite>;
}
export type CheckSuiteFilter = {
  appId?: Maybe<number>;
  checkName?: Maybe<string>;
}
export type Claimable = Mannequin | User;
export type ClearLabelsFromLabelableInput = {
  clientMutationId?: Maybe<string>;
  labelableId: string;
}
export interface ClearLabelsFromLabelablePayload {
  clientMutationId?: Maybe<string>;
  labelable?: Maybe<Labelable>;
}
export type ClearProjectV2ItemFieldValueInput = {
  clientMutationId?: Maybe<string>;
  fieldId: string;
  itemId: string;
  projectId: string;
}
export interface ClearProjectV2ItemFieldValuePayload {
  clientMutationId?: Maybe<string>;
  projectV2Item?: Maybe<ProjectV2Item>;
}
export type CloneProjectInput = {
  body?: Maybe<string>;
  clientMutationId?: Maybe<string>;
  includeWorkflows: Boolean;
  name: string;
  public?: Maybe<Boolean>;
  sourceId: string;
  targetOwnerId: string;
}
export interface CloneProjectPayload {
  clientMutationId?: Maybe<string>;
  jobStatusId?: Maybe<string>;
  project?: Maybe<Project>;
}
export type CloneTemplateRepositoryInput = {
  clientMutationId?: Maybe<string>;
  description?: Maybe<string>;
  includeAllBranches?: Maybe<Boolean>;
  name: string;
  ownerId: string;
  repositoryId: string;
  visibility: RepositoryVisibility;
}
export interface CloneTemplateRepositoryPayload {
  clientMutationId?: Maybe<string>;
  repository?: Maybe<Repository>;
}
export interface Closable {
  closed: Boolean;
  closedAt?: Maybe<DateTime>;
  viewerCanClose: Boolean;
  viewerCanReopen: Boolean;
}
export type CloseDiscussionInput = {
  clientMutationId?: Maybe<string>;
  discussionId: string;
  reason?: Maybe<DiscussionCloseReason>;
}
export interface CloseDiscussionPayload {
  clientMutationId?: Maybe<string>;
  discussion?: Maybe<Discussion>;
}
export type CloseIssueInput = {
  clientMutationId?: Maybe<string>;
  issueId: string;
  stateReason?: Maybe<IssueClosedStateReason>;
}
export interface CloseIssuePayload {
  clientMutationId?: Maybe<string>;
  issue?: Maybe<Issue>;
}
export type ClosePullRequestInput = {
  clientMutationId?: Maybe<string>;
  pullRequestId: string;
}
export interface ClosePullRequestPayload {
  clientMutationId?: Maybe<string>;
  pullRequest?: Maybe<PullRequest>;
}
export type ClosedEvent = Node & UniformResourceLocatable &  {
  actor?: Maybe<Actor>;
  closable: Closable;
  closer?: Maybe<Closer>;
  createdAt: DateTime;
  id: string;
  resourcePath: URI;
  stateReason?: Maybe<IssueStateReason>;
  url: URI;
}
export type Closer = Commit | PullRequest;
export type CodeOfConduct = Node &  {
  body?: Maybe<string>;
  id: string;
  key: string;
  name: string;
  resourcePath?: Maybe<URI>;
  url?: Maybe<URI>;
}
export enum CollaboratorAffiliation {
  ALL,
  DIRECT,
  OUTSIDE,
}
export interface Comment {
  author?: Maybe<Actor>;
  authorAssociation: CommentAuthorAssociation;
  body: string;
  bodyHTML: HTML;
  bodyText: string;
  createdAt: DateTime;
  createdViaEmail: Boolean;
  editor?: Maybe<Actor>;
  id: string;
  includesCreatedEdit: Boolean;
  lastEditedAt?: Maybe<DateTime>;
  publishedAt?: Maybe<DateTime>;
  updatedAt: DateTime;
  userContentEdits?: Maybe<UserContentEditConnection>;
  viewerDidAuthor: Boolean;
}
export enum CommentAuthorAssociation {
  COLLABORATOR,
  CONTRIBUTOR,
  FIRST_TIMER,
  FIRST_TIME_CONTRIBUTOR,
  MANNEQUIN,
  MEMBER,
  NONE,
  OWNER,
}
export enum CommentCannotUpdateReason {
  ARCHIVED,
  DENIED,
  INSUFFICIENT_ACCESS,
  LOCKED,
  LOGIN_REQUIRED,
  MAINTENANCE,
  VERIFIED_EMAIL_REQUIRED,
}
export type CommentDeletedEvent = Node &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  databaseId?: Maybe<number>;
  deletedCommentAuthor?: Maybe<Actor>;
  id: string;
}
export interface CommentUserContentEditsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export type Commit = GitObject & Node & Subscribable & UniformResourceLocatable &  {
  abbreviatedOid: string;
  additions: number;
  associatedPullRequests?: Maybe<PullRequestConnection>;
  author?: Maybe<GitActor>;
  authoredByCommitter: Boolean;
  authoredDate: DateTime;
  authors: GitActorConnection;
  blame: Blame;
  changedFiles: number;
  changedFilesIfAvailable?: Maybe<number>;
  checkSuites?: Maybe<CheckSuiteConnection>;
  comments: CommitCommentConnection;
  commitResourcePath: URI;
  commitUrl: URI;
  committedDate: DateTime;
  committedViaWeb: Boolean;
  committer?: Maybe<GitActor>;
  deletions: number;
  deployments?: Maybe<DeploymentConnection>;
  file?: Maybe<TreeEntry>;
  history: CommitHistoryConnection;
  id: string;
  message: string;
  messageBody: string;
  messageBodyHTML: HTML;
  messageHeadline: string;
  messageHeadlineHTML: HTML;
  oid: GitObjectID;
  onBehalfOf?: Maybe<Organization>;
  parents: CommitConnection;
  pushedDate?: Maybe<DateTime>;
  repository: Repository;
  resourcePath: URI;
  signature?: Maybe<GitSignature>;
  status?: Maybe<Status>;
  statusCheckRollup?: Maybe<StatusCheckRollup>;
  submodules: SubmoduleConnection;
  tarballUrl: URI;
  tree: Tree;
  treeResourcePath: URI;
  treeUrl: URI;
  url: URI;
  viewerCanSubscribe: Boolean;
  viewerSubscription?: Maybe<SubscriptionState>;
  zipballUrl: URI;
}
export interface CommitAssociatedPullRequestsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<PullRequestOrder>;
}
export interface CommitAuthorsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface CommitBlameArgs{
  path: string;
}
export interface CommitCheckSuitesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  filterBy: Maybe<CheckSuiteFilter>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface CommitCommentsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface CommitDeploymentsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  environments: Maybe<Array<string>>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<DeploymentOrder>;
}
export interface CommitFileArgs{
  path: string;
}
export interface CommitHistoryArgs{
  after: Maybe<string>;
  author: Maybe<CommitAuthor>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  path: Maybe<string>;
  since: Maybe<GitTimestamp>;
  until: Maybe<GitTimestamp>;
}
export interface CommitParentsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface CommitSubmodulesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export type CommitAuthor = {
  emails?: Maybe<Array<string>>;
  id?: Maybe<string>;
}
export interface CommitAuthorEmailPatternParameters {
  name?: Maybe<string>;
  negate: Boolean;
  operator: string;
  pattern: string;
}
export type CommitAuthorEmailPatternParametersInput = {
  name?: Maybe<string>;
  negate?: Maybe<Boolean>;
  operator: string;
  pattern: string;
}
export type CommitComment = Comment & Deletable & Minimizable & Node & Reactable & RepositoryNode & Updatable & UpdatableComment &  {
  author?: Maybe<Actor>;
  authorAssociation: CommentAuthorAssociation;
  body: string;
  bodyHTML: HTML;
  bodyText: string;
  commit?: Maybe<Commit>;
  createdAt: DateTime;
  createdViaEmail: Boolean;
  databaseId?: Maybe<number>;
  editor?: Maybe<Actor>;
  id: string;
  includesCreatedEdit: Boolean;
  isMinimized: Boolean;
  lastEditedAt?: Maybe<DateTime>;
  minimizedReason?: Maybe<string>;
  path?: Maybe<string>;
  position?: Maybe<number>;
  publishedAt?: Maybe<DateTime>;
  reactionGroups?: Maybe<Array<ReactionGroup>>;
  reactions: ReactionConnection;
  repository: Repository;
  resourcePath: URI;
  updatedAt: DateTime;
  url: URI;
  userContentEdits?: Maybe<UserContentEditConnection>;
  viewerCanDelete: Boolean;
  viewerCanMinimize: Boolean;
  viewerCanReact: Boolean;
  viewerCanUpdate: Boolean;
  viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
  viewerDidAuthor: Boolean;
}
export interface CommitCommentReactionsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  content: Maybe<ReactionContent>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ReactionOrder>;
}
export interface CommitCommentUserContentEditsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface CommitCommentConnection {
  edges?: Maybe<Array<Maybe<CommitCommentEdge>>>;
  nodes?: Maybe<Array<Maybe<CommitComment>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface CommitCommentEdge {
  cursor: string;
  node?: Maybe<CommitComment>;
}
export type CommitCommentThread = Node & RepositoryNode &  {
  comments: CommitCommentConnection;
  commit?: Maybe<Commit>;
  id: string;
  path?: Maybe<string>;
  position?: Maybe<number>;
  repository: Repository;
}
export interface CommitCommentThreadCommentsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface CommitConnection {
  edges?: Maybe<Array<Maybe<CommitEdge>>>;
  nodes?: Maybe<Array<Maybe<Commit>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export type CommitContributionOrder = {
  direction: OrderDirection;
  field: CommitContributionOrderField;
}
export enum CommitContributionOrderField {
  COMMIT_COUNT,
  OCCURRED_AT,
}
export interface CommitContributionsByRepository {
  contributions: CreatedCommitContributionConnection;
  repository: Repository;
  resourcePath: URI;
  url: URI;
}
export interface CommitContributionsByRepositoryContributionsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<CommitContributionOrder>;
}
export interface CommitEdge {
  cursor: string;
  node?: Maybe<Commit>;
}
export interface CommitHistoryConnection {
  edges?: Maybe<Array<Maybe<CommitEdge>>>;
  nodes?: Maybe<Array<Maybe<Commit>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export type CommitMessage = {
  body?: Maybe<string>;
  headline: string;
}
export interface CommitMessagePatternParameters {
  name?: Maybe<string>;
  negate: Boolean;
  operator: string;
  pattern: string;
}
export type CommitMessagePatternParametersInput = {
  name?: Maybe<string>;
  negate?: Maybe<Boolean>;
  operator: string;
  pattern: string;
}
export type CommittableBranch = {
  branchName?: Maybe<string>;
  id?: Maybe<string>;
  repositoryNameWithOwner?: Maybe<string>;
}
export interface CommitterEmailPatternParameters {
  name?: Maybe<string>;
  negate: Boolean;
  operator: string;
  pattern: string;
}
export type CommitterEmailPatternParametersInput = {
  name?: Maybe<string>;
  negate?: Maybe<Boolean>;
  operator: string;
  pattern: string;
}
export type Comparison = Node &  {
  aheadBy: number;
  baseTarget: GitObject;
  behindBy: number;
  commits: ComparisonCommitConnection;
  headTarget: GitObject;
  id: string;
  status: ComparisonStatus;
}
export interface ComparisonCommitsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface ComparisonCommitConnection {
  authorCount: number;
  edges?: Maybe<Array<Maybe<CommitEdge>>>;
  nodes?: Maybe<Array<Maybe<Commit>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export enum ComparisonStatus {
  AHEAD,
  BEHIND,
  DIVERGED,
  IDENTICAL,
}
export type ConnectedEvent = Node &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  id: string;
  isCrossRepository: Boolean;
  source: ReferencedSubject;
  subject: ReferencedSubject;
}
export interface Contribution {
  isRestricted: Boolean;
  occurredAt: DateTime;
  resourcePath: URI;
  url: URI;
  user: User;
}
export interface ContributionCalendar {
  colors: Array<string>;
  isHalloween: Boolean;
  months: Array<ContributionCalendarMonth>;
  totalContributions: number;
  weeks: Array<ContributionCalendarWeek>;
}
export interface ContributionCalendarDay {
  color: string;
  contributionCount: number;
  contributionLevel: ContributionLevel;
  date: Date;
  weekday: number;
}
export interface ContributionCalendarMonth {
  firstDay: Date;
  name: string;
  totalWeeks: number;
  year: number;
}
export interface ContributionCalendarWeek {
  contributionDays: Array<ContributionCalendarDay>;
  firstDay: Date;
}
export enum ContributionLevel {
  FIRST_QUARTILE,
  FOURTH_QUARTILE,
  NONE,
  SECOND_QUARTILE,
  THIRD_QUARTILE,
}
export type ContributionOrder = {
  direction: OrderDirection;
}
export interface ContributionsCollection {
  commitContributionsByRepository: Array<CommitContributionsByRepository>;
  contributionCalendar: ContributionCalendar;
  contributionYears: Array<number>;
  doesEndInCurrentMonth: Boolean;
  earliestRestrictedContributionDate?: Maybe<Date>;
  endedAt: DateTime;
  firstIssueContribution?: Maybe<CreatedIssueOrRestrictedContribution>;
  firstPullRequestContribution?: Maybe<CreatedPullRequestOrRestrictedContribution>;
  firstRepositoryContribution?: Maybe<CreatedRepositoryOrRestrictedContribution>;
  hasActivityInThePast: Boolean;
  hasAnyContributions: Boolean;
  hasAnyRestrictedContributions: Boolean;
  isSingleDay: Boolean;
  issueContributions: CreatedIssueContributionConnection;
  issueContributionsByRepository: Array<IssueContributionsByRepository>;
  joinedGitHubContribution?: Maybe<JoinedGitHubContribution>;
  latestRestrictedContributionDate?: Maybe<Date>;
  mostRecentCollectionWithActivity?: Maybe<ContributionsCollection>;
  mostRecentCollectionWithoutActivity?: Maybe<ContributionsCollection>;
  popularIssueContribution?: Maybe<CreatedIssueContribution>;
  popularPullRequestContribution?: Maybe<CreatedPullRequestContribution>;
  pullRequestContributions: CreatedPullRequestContributionConnection;
  pullRequestContributionsByRepository: Array<PullRequestContributionsByRepository>;
  pullRequestReviewContributions: CreatedPullRequestReviewContributionConnection;
  pullRequestReviewContributionsByRepository: Array<PullRequestReviewContributionsByRepository>;
  repositoryContributions: CreatedRepositoryContributionConnection;
  restrictedContributionsCount: number;
  startedAt: DateTime;
  totalCommitContributions: number;
  totalIssueContributions: number;
  totalPullRequestContributions: number;
  totalPullRequestReviewContributions: number;
  totalRepositoriesWithContributedCommits: number;
  totalRepositoriesWithContributedIssues: number;
  totalRepositoriesWithContributedPullRequestReviews: number;
  totalRepositoriesWithContributedPullRequests: number;
  totalRepositoryContributions: number;
  user: User;
}
export interface ContributionsCollectionCommitContributionsByRepositoryArgs{
  maxRepositories: Maybe<number>;
}
export interface ContributionsCollectionIssueContributionsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  excludeFirst: Maybe<Boolean>;
  excludePopular: Maybe<Boolean>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ContributionOrder>;
}
export interface ContributionsCollectionIssueContributionsByRepositoryArgs{
  excludeFirst: Maybe<Boolean>;
  excludePopular: Maybe<Boolean>;
  maxRepositories: Maybe<number>;
}
export interface ContributionsCollectionPullRequestContributionsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  excludeFirst: Maybe<Boolean>;
  excludePopular: Maybe<Boolean>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ContributionOrder>;
}
export interface ContributionsCollectionPullRequestContributionsByRepositoryArgs{
  excludeFirst: Maybe<Boolean>;
  excludePopular: Maybe<Boolean>;
  maxRepositories: Maybe<number>;
}
export interface ContributionsCollectionPullRequestReviewContributionsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ContributionOrder>;
}
export interface ContributionsCollectionPullRequestReviewContributionsByRepositoryArgs{
  maxRepositories: Maybe<number>;
}
export interface ContributionsCollectionRepositoryContributionsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  excludeFirst: Maybe<Boolean>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ContributionOrder>;
}
export interface ContributionsCollectionTotalIssueContributionsArgs{
  excludeFirst: Maybe<Boolean>;
  excludePopular: Maybe<Boolean>;
}
export interface ContributionsCollectionTotalPullRequestContributionsArgs{
  excludeFirst: Maybe<Boolean>;
  excludePopular: Maybe<Boolean>;
}
export interface ContributionsCollectionTotalRepositoriesWithContributedIssuesArgs{
  excludeFirst: Maybe<Boolean>;
  excludePopular: Maybe<Boolean>;
}
export interface ContributionsCollectionTotalRepositoriesWithContributedPullRequestsArgs{
  excludeFirst: Maybe<Boolean>;
  excludePopular: Maybe<Boolean>;
}
export interface ContributionsCollectionTotalRepositoryContributionsArgs{
  excludeFirst: Maybe<Boolean>;
}
export type ConvertProjectCardNoteToIssueInput = {
  body?: Maybe<string>;
  clientMutationId?: Maybe<string>;
  projectCardId: string;
  repositoryId: string;
  title?: Maybe<string>;
}
export interface ConvertProjectCardNoteToIssuePayload {
  clientMutationId?: Maybe<string>;
  projectCard?: Maybe<ProjectCard>;
}
export type ConvertPullRequestToDraftInput = {
  clientMutationId?: Maybe<string>;
  pullRequestId: string;
}
export interface ConvertPullRequestToDraftPayload {
  clientMutationId?: Maybe<string>;
  pullRequest?: Maybe<PullRequest>;
}
export type ConvertToDraftEvent = Node & UniformResourceLocatable &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  id: string;
  pullRequest: PullRequest;
  resourcePath: URI;
  url: URI;
}
export type ConvertedNoteToIssueEvent = Node &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  databaseId?: Maybe<number>;
  id: string;
  project?: Maybe<Project>;
  projectCard?: Maybe<ProjectCard>;
  projectColumnName: string;
}
export type ConvertedToDiscussionEvent = Node &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  discussion?: Maybe<Discussion>;
  id: string;
}
export type CopyProjectV2Input = {
  clientMutationId?: Maybe<string>;
  includeDraftIssues?: Maybe<Boolean>;
  ownerId: string;
  projectId: string;
  title: string;
}
export interface CopyProjectV2Payload {
  clientMutationId?: Maybe<string>;
  projectV2?: Maybe<ProjectV2>;
}
export type CreateAttributionInvitationInput = {
  clientMutationId?: Maybe<string>;
  ownerId: string;
  sourceId: string;
  targetId: string;
}
export interface CreateAttributionInvitationPayload {
  clientMutationId?: Maybe<string>;
  owner?: Maybe<Organization>;
  source?: Maybe<Claimable>;
  target?: Maybe<Claimable>;
}
export type CreateBranchProtectionRuleInput = {
  allowsDeletions?: Maybe<Boolean>;
  allowsForcePushes?: Maybe<Boolean>;
  blocksCreations?: Maybe<Boolean>;
  bypassForcePushActorIds?: Maybe<Array<string>>;
  bypassPullRequestActorIds?: Maybe<Array<string>>;
  clientMutationId?: Maybe<string>;
  dismissesStaleReviews?: Maybe<Boolean>;
  isAdminEnforced?: Maybe<Boolean>;
  lockAllowsFetchAndMerge?: Maybe<Boolean>;
  lockBranch?: Maybe<Boolean>;
  pattern: string;
  pushActorIds?: Maybe<Array<string>>;
  repositoryId: string;
  requireLastPushApproval?: Maybe<Boolean>;
  requiredApprovingReviewCount?: Maybe<number>;
  requiredDeploymentEnvironments?: Maybe<Array<string>>;
  requiredStatusCheckContexts?: Maybe<Array<string>>;
  requiredStatusChecks?: Maybe<Array<RequiredStatusCheckInput>>;
  requiresApprovingReviews?: Maybe<Boolean>;
  requiresCodeOwnerReviews?: Maybe<Boolean>;
  requiresCommitSignatures?: Maybe<Boolean>;
  requiresConversationResolution?: Maybe<Boolean>;
  requiresDeployments?: Maybe<Boolean>;
  requiresLinearHistory?: Maybe<Boolean>;
  requiresStatusChecks?: Maybe<Boolean>;
  requiresStrictStatusChecks?: Maybe<Boolean>;
  restrictsPushes?: Maybe<Boolean>;
  restrictsReviewDismissals?: Maybe<Boolean>;
  reviewDismissalActorIds?: Maybe<Array<string>>;
}
export interface CreateBranchProtectionRulePayload {
  branchProtectionRule?: Maybe<BranchProtectionRule>;
  clientMutationId?: Maybe<string>;
}
export type CreateCheckRunInput = {
  actions?: Maybe<Array<CheckRunAction>>;
  clientMutationId?: Maybe<string>;
  completedAt?: Maybe<DateTime>;
  conclusion?: Maybe<CheckConclusionState>;
  detailsUrl?: Maybe<URI>;
  externalId?: Maybe<string>;
  headSha: GitObjectID;
  name: string;
  output?: Maybe<CheckRunOutput>;
  repositoryId: string;
  startedAt?: Maybe<DateTime>;
  status?: Maybe<RequestableCheckStatusState>;
}
export interface CreateCheckRunPayload {
  checkRun?: Maybe<CheckRun>;
  clientMutationId?: Maybe<string>;
}
export type CreateCheckSuiteInput = {
  clientMutationId?: Maybe<string>;
  headSha: GitObjectID;
  repositoryId: string;
}
export interface CreateCheckSuitePayload {
  checkSuite?: Maybe<CheckSuite>;
  clientMutationId?: Maybe<string>;
}
export type CreateCommitOnBranchInput = {
  branch: CommittableBranch;
  clientMutationId?: Maybe<string>;
  expectedHeadOid: GitObjectID;
  fileChanges?: Maybe<FileChanges>;
  message: CommitMessage;
}
export interface CreateCommitOnBranchPayload {
  clientMutationId?: Maybe<string>;
  commit?: Maybe<Commit>;
  ref?: Maybe<Ref>;
}
export type CreateDeploymentInput = {
  autoMerge?: Maybe<Boolean>;
  clientMutationId?: Maybe<string>;
  description?: Maybe<string>;
  environment?: Maybe<string>;
  payload?: Maybe<string>;
  refId: string;
  repositoryId: string;
  requiredContexts?: Maybe<Array<string>>;
  task?: Maybe<string>;
}
export interface CreateDeploymentPayload {
  autoMerged?: Maybe<Boolean>;
  clientMutationId?: Maybe<string>;
  deployment?: Maybe<Deployment>;
}
export type CreateDeploymentStatusInput = {
  autoInactive?: Maybe<Boolean>;
  clientMutationId?: Maybe<string>;
  deploymentId: string;
  description?: Maybe<string>;
  environment?: Maybe<string>;
  environmentUrl?: Maybe<string>;
  logUrl?: Maybe<string>;
  state: DeploymentStatusState;
}
export interface CreateDeploymentStatusPayload {
  clientMutationId?: Maybe<string>;
  deploymentStatus?: Maybe<DeploymentStatus>;
}
export type CreateDiscussionInput = {
  body: string;
  categoryId: string;
  clientMutationId?: Maybe<string>;
  repositoryId: string;
  title: string;
}
export interface CreateDiscussionPayload {
  clientMutationId?: Maybe<string>;
  discussion?: Maybe<Discussion>;
}
export type CreateEnterpriseOrganizationInput = {
  adminLogins: Array<string>;
  billingEmail: string;
  clientMutationId?: Maybe<string>;
  enterpriseId: string;
  login: string;
  profileName: string;
}
export interface CreateEnterpriseOrganizationPayload {
  clientMutationId?: Maybe<string>;
  enterprise?: Maybe<Enterprise>;
  organization?: Maybe<Organization>;
}
export type CreateEnvironmentInput = {
  clientMutationId?: Maybe<string>;
  name: string;
  repositoryId: string;
}
export interface CreateEnvironmentPayload {
  clientMutationId?: Maybe<string>;
  environment?: Maybe<Environment>;
}
export type CreateIpAllowListEntryInput = {
  allowListValue: string;
  clientMutationId?: Maybe<string>;
  isActive: Boolean;
  name?: Maybe<string>;
  ownerId: string;
}
export interface CreateIpAllowListEntryPayload {
  clientMutationId?: Maybe<string>;
  ipAllowListEntry?: Maybe<IpAllowListEntry>;
}
export type CreateIssueInput = {
  assigneeIds?: Maybe<Array<string>>;
  body?: Maybe<string>;
  clientMutationId?: Maybe<string>;
  issueTemplate?: Maybe<string>;
  labelIds?: Maybe<Array<string>>;
  milestoneId?: Maybe<string>;
  projectIds?: Maybe<Array<string>>;
  repositoryId: string;
  title: string;
}
export interface CreateIssuePayload {
  clientMutationId?: Maybe<string>;
  issue?: Maybe<Issue>;
}
export type CreateLabelInput = {
  clientMutationId?: Maybe<string>;
  color: string;
  description?: Maybe<string>;
  name: string;
  repositoryId: string;
}
export interface CreateLabelPayload {
  clientMutationId?: Maybe<string>;
  label?: Maybe<Label>;
}
export type CreateLinkedBranchInput = {
  clientMutationId?: Maybe<string>;
  issueId: string;
  name?: Maybe<string>;
  oid: GitObjectID;
  repositoryId?: Maybe<string>;
}
export interface CreateLinkedBranchPayload {
  clientMutationId?: Maybe<string>;
  linkedBranch?: Maybe<LinkedBranch>;
}
export type CreateMigrationSourceInput = {
  accessToken?: Maybe<string>;
  clientMutationId?: Maybe<string>;
  githubPat?: Maybe<string>;
  name: string;
  ownerId: string;
  type: MigrationSourceType;
  url?: Maybe<string>;
}
export interface CreateMigrationSourcePayload {
  clientMutationId?: Maybe<string>;
  migrationSource?: Maybe<MigrationSource>;
}
export type CreateProjectInput = {
  body?: Maybe<string>;
  clientMutationId?: Maybe<string>;
  name: string;
  ownerId: string;
  repositoryIds?: Maybe<Array<string>>;
  template?: Maybe<ProjectTemplate>;
}
export interface CreateProjectPayload {
  clientMutationId?: Maybe<string>;
  project?: Maybe<Project>;
}
export type CreateProjectV2FieldInput = {
  clientMutationId?: Maybe<string>;
  dataType: ProjectV2CustomFieldType;
  name: string;
  projectId: string;
  singleSelectOptions?: Maybe<Array<ProjectV2SingleSelectFieldOptionInput>>;
}
export interface CreateProjectV2FieldPayload {
  clientMutationId?: Maybe<string>;
  projectV2Field?: Maybe<ProjectV2FieldConfiguration>;
}
export type CreateProjectV2Input = {
  clientMutationId?: Maybe<string>;
  ownerId: string;
  repositoryId?: Maybe<string>;
  teamId?: Maybe<string>;
  title: string;
}
export interface CreateProjectV2Payload {
  clientMutationId?: Maybe<string>;
  projectV2?: Maybe<ProjectV2>;
}
export type CreatePullRequestInput = {
  baseRefName: string;
  body?: Maybe<string>;
  clientMutationId?: Maybe<string>;
  draft?: Maybe<Boolean>;
  headRefName: string;
  headRepositoryId?: Maybe<string>;
  maintainerCanModify?: Maybe<Boolean>;
  repositoryId: string;
  title: string;
}
export interface CreatePullRequestPayload {
  clientMutationId?: Maybe<string>;
  pullRequest?: Maybe<PullRequest>;
}
export type CreateRefInput = {
  clientMutationId?: Maybe<string>;
  name: string;
  oid: GitObjectID;
  repositoryId: string;
}
export interface CreateRefPayload {
  clientMutationId?: Maybe<string>;
  ref?: Maybe<Ref>;
}
export type CreateRepositoryInput = {
  clientMutationId?: Maybe<string>;
  description?: Maybe<string>;
  hasIssuesEnabled?: Maybe<Boolean>;
  hasWikiEnabled?: Maybe<Boolean>;
  homepageUrl?: Maybe<URI>;
  name: string;
  ownerId?: Maybe<string>;
  teamId?: Maybe<string>;
  template?: Maybe<Boolean>;
  visibility: RepositoryVisibility;
}
export interface CreateRepositoryPayload {
  clientMutationId?: Maybe<string>;
  repository?: Maybe<Repository>;
}
export type CreateRepositoryRulesetInput = {
  bypassActors?: Maybe<Array<RepositoryRulesetBypassActorInput>>;
  clientMutationId?: Maybe<string>;
  conditions: RepositoryRuleConditionsInput;
  enforcement: RuleEnforcement;
  name: string;
  rules?: Maybe<Array<RepositoryRuleInput>>;
  sourceId: string;
  target?: Maybe<RepositoryRulesetTarget>;
}
export interface CreateRepositoryRulesetPayload {
  clientMutationId?: Maybe<string>;
  ruleset?: Maybe<RepositoryRuleset>;
}
export type CreateSponsorsListingInput = {
  billingCountryOrRegionCode?: Maybe<SponsorsCountryOrRegionCode>;
  clientMutationId?: Maybe<string>;
  contactEmail?: Maybe<string>;
  fiscalHostLogin?: Maybe<string>;
  fiscallyHostedProjectProfileUrl?: Maybe<string>;
  fullDescription?: Maybe<string>;
  residenceCountryOrRegionCode?: Maybe<SponsorsCountryOrRegionCode>;
  sponsorableLogin?: Maybe<string>;
}
export interface CreateSponsorsListingPayload {
  clientMutationId?: Maybe<string>;
  sponsorsListing?: Maybe<SponsorsListing>;
}
export type CreateSponsorsTierInput = {
  amount: number;
  clientMutationId?: Maybe<string>;
  description: string;
  isRecurring?: Maybe<Boolean>;
  publish?: Maybe<Boolean>;
  repositoryId?: Maybe<string>;
  repositoryName?: Maybe<string>;
  repositoryOwnerLogin?: Maybe<string>;
  sponsorableId?: Maybe<string>;
  sponsorableLogin?: Maybe<string>;
  welcomeMessage?: Maybe<string>;
}
export interface CreateSponsorsTierPayload {
  clientMutationId?: Maybe<string>;
  sponsorsTier?: Maybe<SponsorsTier>;
}
export type CreateSponsorshipInput = {
  amount?: Maybe<number>;
  clientMutationId?: Maybe<string>;
  isRecurring?: Maybe<Boolean>;
  privacyLevel?: Maybe<SponsorshipPrivacy>;
  receiveEmails?: Maybe<Boolean>;
  sponsorId?: Maybe<string>;
  sponsorLogin?: Maybe<string>;
  sponsorableId?: Maybe<string>;
  sponsorableLogin?: Maybe<string>;
  tierId?: Maybe<string>;
}
export interface CreateSponsorshipPayload {
  clientMutationId?: Maybe<string>;
  sponsorship?: Maybe<Sponsorship>;
}
export type CreateSponsorshipsInput = {
  clientMutationId?: Maybe<string>;
  privacyLevel?: Maybe<SponsorshipPrivacy>;
  receiveEmails?: Maybe<Boolean>;
  sponsorLogin: string;
  sponsorships: Array<BulkSponsorship>;
}
export interface CreateSponsorshipsPayload {
  clientMutationId?: Maybe<string>;
  sponsorables?: Maybe<Array<Sponsorable>>;
}
export type CreateTeamDiscussionCommentInput = {
  body?: Maybe<string>;
  clientMutationId?: Maybe<string>;
  discussionId?: Maybe<string>;
}
export interface CreateTeamDiscussionCommentPayload {
  clientMutationId?: Maybe<string>;
  teamDiscussionComment?: Maybe<TeamDiscussionComment>;
}
export type CreateTeamDiscussionInput = {
  body?: Maybe<string>;
  clientMutationId?: Maybe<string>;
  private?: Maybe<Boolean>;
  teamId?: Maybe<string>;
  title?: Maybe<string>;
}
export interface CreateTeamDiscussionPayload {
  clientMutationId?: Maybe<string>;
  teamDiscussion?: Maybe<TeamDiscussion>;
}
export type CreatedCommitContribution = Contribution &  {
  commitCount: number;
  isRestricted: Boolean;
  occurredAt: DateTime;
  repository: Repository;
  resourcePath: URI;
  url: URI;
  user: User;
}
export interface CreatedCommitContributionConnection {
  edges?: Maybe<Array<Maybe<CreatedCommitContributionEdge>>>;
  nodes?: Maybe<Array<Maybe<CreatedCommitContribution>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface CreatedCommitContributionEdge {
  cursor: string;
  node?: Maybe<CreatedCommitContribution>;
}
export type CreatedIssueContribution = Contribution &  {
  isRestricted: Boolean;
  issue: Issue;
  occurredAt: DateTime;
  resourcePath: URI;
  url: URI;
  user: User;
}
export interface CreatedIssueContributionConnection {
  edges?: Maybe<Array<Maybe<CreatedIssueContributionEdge>>>;
  nodes?: Maybe<Array<Maybe<CreatedIssueContribution>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface CreatedIssueContributionEdge {
  cursor: string;
  node?: Maybe<CreatedIssueContribution>;
}
export type CreatedIssueOrRestrictedContribution = CreatedIssueContribution | RestrictedContribution;
export type CreatedPullRequestContribution = Contribution &  {
  isRestricted: Boolean;
  occurredAt: DateTime;
  pullRequest: PullRequest;
  resourcePath: URI;
  url: URI;
  user: User;
}
export interface CreatedPullRequestContributionConnection {
  edges?: Maybe<Array<Maybe<CreatedPullRequestContributionEdge>>>;
  nodes?: Maybe<Array<Maybe<CreatedPullRequestContribution>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface CreatedPullRequestContributionEdge {
  cursor: string;
  node?: Maybe<CreatedPullRequestContribution>;
}
export type CreatedPullRequestOrRestrictedContribution = CreatedPullRequestContribution | RestrictedContribution;
export type CreatedPullRequestReviewContribution = Contribution &  {
  isRestricted: Boolean;
  occurredAt: DateTime;
  pullRequest: PullRequest;
  pullRequestReview: PullRequestReview;
  repository: Repository;
  resourcePath: URI;
  url: URI;
  user: User;
}
export interface CreatedPullRequestReviewContributionConnection {
  edges?: Maybe<Array<Maybe<CreatedPullRequestReviewContributionEdge>>>;
  nodes?: Maybe<Array<Maybe<CreatedPullRequestReviewContribution>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface CreatedPullRequestReviewContributionEdge {
  cursor: string;
  node?: Maybe<CreatedPullRequestReviewContribution>;
}
export type CreatedRepositoryContribution = Contribution &  {
  isRestricted: Boolean;
  occurredAt: DateTime;
  repository: Repository;
  resourcePath: URI;
  url: URI;
  user: User;
}
export interface CreatedRepositoryContributionConnection {
  edges?: Maybe<Array<Maybe<CreatedRepositoryContributionEdge>>>;
  nodes?: Maybe<Array<Maybe<CreatedRepositoryContribution>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface CreatedRepositoryContributionEdge {
  cursor: string;
  node?: Maybe<CreatedRepositoryContribution>;
}
export type CreatedRepositoryOrRestrictedContribution = CreatedRepositoryContribution | RestrictedContribution;
export type CrossReferencedEvent = Node & UniformResourceLocatable &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  id: string;
  isCrossRepository: Boolean;
  referencedAt: DateTime;
  resourcePath: URI;
  source: ReferencedSubject;
  target: ReferencedSubject;
  url: URI;
  willCloseTarget: Boolean;
}
export type DeclineTopicSuggestionInput = {
  clientMutationId?: Maybe<string>;
  name: string;
  reason: TopicSuggestionDeclineReason;
  repositoryId: string;
}
export interface DeclineTopicSuggestionPayload {
  clientMutationId?: Maybe<string>;
  topic?: Maybe<Topic>;
}
export enum DefaultRepositoryPermissionField {
  ADMIN,
  NONE,
  READ,
  WRITE,
}
export interface Deletable {
  viewerCanDelete: Boolean;
}
export type DeleteBranchProtectionRuleInput = {
  branchProtectionRuleId: string;
  clientMutationId?: Maybe<string>;
}
export interface DeleteBranchProtectionRulePayload {
  clientMutationId?: Maybe<string>;
}
export type DeleteDeploymentInput = {
  clientMutationId?: Maybe<string>;
  id: string;
}
export interface DeleteDeploymentPayload {
  clientMutationId?: Maybe<string>;
}
export type DeleteDiscussionCommentInput = {
  clientMutationId?: Maybe<string>;
  id: string;
}
export interface DeleteDiscussionCommentPayload {
  clientMutationId?: Maybe<string>;
  comment?: Maybe<DiscussionComment>;
}
export type DeleteDiscussionInput = {
  clientMutationId?: Maybe<string>;
  id: string;
}
export interface DeleteDiscussionPayload {
  clientMutationId?: Maybe<string>;
  discussion?: Maybe<Discussion>;
}
export type DeleteEnvironmentInput = {
  clientMutationId?: Maybe<string>;
  id: string;
}
export interface DeleteEnvironmentPayload {
  clientMutationId?: Maybe<string>;
}
export type DeleteIpAllowListEntryInput = {
  clientMutationId?: Maybe<string>;
  ipAllowListEntryId: string;
}
export interface DeleteIpAllowListEntryPayload {
  clientMutationId?: Maybe<string>;
  ipAllowListEntry?: Maybe<IpAllowListEntry>;
}
export type DeleteIssueCommentInput = {
  clientMutationId?: Maybe<string>;
  id: string;
}
export interface DeleteIssueCommentPayload {
  clientMutationId?: Maybe<string>;
}
export type DeleteIssueInput = {
  clientMutationId?: Maybe<string>;
  issueId: string;
}
export interface DeleteIssuePayload {
  clientMutationId?: Maybe<string>;
  repository?: Maybe<Repository>;
}
export type DeleteLabelInput = {
  clientMutationId?: Maybe<string>;
  id: string;
}
export interface DeleteLabelPayload {
  clientMutationId?: Maybe<string>;
}
export type DeleteLinkedBranchInput = {
  clientMutationId?: Maybe<string>;
  linkedBranchId: string;
}
export interface DeleteLinkedBranchPayload {
  clientMutationId?: Maybe<string>;
  issue?: Maybe<Issue>;
}
export type DeletePackageVersionInput = {
  clientMutationId?: Maybe<string>;
  packageVersionId: string;
}
export interface DeletePackageVersionPayload {
  clientMutationId?: Maybe<string>;
  success?: Maybe<Boolean>;
}
export type DeleteProjectCardInput = {
  cardId: string;
  clientMutationId?: Maybe<string>;
}
export interface DeleteProjectCardPayload {
  clientMutationId?: Maybe<string>;
  column?: Maybe<ProjectColumn>;
  deletedCardId?: Maybe<string>;
}
export type DeleteProjectColumnInput = {
  clientMutationId?: Maybe<string>;
  columnId: string;
}
export interface DeleteProjectColumnPayload {
  clientMutationId?: Maybe<string>;
  deletedColumnId?: Maybe<string>;
  project?: Maybe<Project>;
}
export type DeleteProjectInput = {
  clientMutationId?: Maybe<string>;
  projectId: string;
}
export interface DeleteProjectPayload {
  clientMutationId?: Maybe<string>;
  owner?: Maybe<ProjectOwner>;
}
export type DeleteProjectV2FieldInput = {
  clientMutationId?: Maybe<string>;
  fieldId: string;
}
export interface DeleteProjectV2FieldPayload {
  clientMutationId?: Maybe<string>;
  projectV2Field?: Maybe<ProjectV2FieldConfiguration>;
}
export type DeleteProjectV2Input = {
  clientMutationId?: Maybe<string>;
  projectId: string;
}
export type DeleteProjectV2ItemInput = {
  clientMutationId?: Maybe<string>;
  itemId: string;
  projectId: string;
}
export interface DeleteProjectV2ItemPayload {
  clientMutationId?: Maybe<string>;
  deletedItemId?: Maybe<string>;
}
export interface DeleteProjectV2Payload {
  clientMutationId?: Maybe<string>;
  projectV2?: Maybe<ProjectV2>;
}
export type DeleteProjectV2WorkflowInput = {
  clientMutationId?: Maybe<string>;
  workflowId: string;
}
export interface DeleteProjectV2WorkflowPayload {
  clientMutationId?: Maybe<string>;
  deletedWorkflowId?: Maybe<string>;
  projectV2?: Maybe<ProjectV2>;
}
export type DeletePullRequestReviewCommentInput = {
  clientMutationId?: Maybe<string>;
  id: string;
}
export interface DeletePullRequestReviewCommentPayload {
  clientMutationId?: Maybe<string>;
  pullRequestReview?: Maybe<PullRequestReview>;
  pullRequestReviewComment?: Maybe<PullRequestReviewComment>;
}
export type DeletePullRequestReviewInput = {
  clientMutationId?: Maybe<string>;
  pullRequestReviewId: string;
}
export interface DeletePullRequestReviewPayload {
  clientMutationId?: Maybe<string>;
  pullRequestReview?: Maybe<PullRequestReview>;
}
export type DeleteRefInput = {
  clientMutationId?: Maybe<string>;
  refId: string;
}
export interface DeleteRefPayload {
  clientMutationId?: Maybe<string>;
}
export type DeleteRepositoryRulesetInput = {
  clientMutationId?: Maybe<string>;
  repositoryRulesetId: string;
}
export interface DeleteRepositoryRulesetPayload {
  clientMutationId?: Maybe<string>;
}
export type DeleteTeamDiscussionCommentInput = {
  clientMutationId?: Maybe<string>;
  id: string;
}
export interface DeleteTeamDiscussionCommentPayload {
  clientMutationId?: Maybe<string>;
}
export type DeleteTeamDiscussionInput = {
  clientMutationId?: Maybe<string>;
  id: string;
}
export interface DeleteTeamDiscussionPayload {
  clientMutationId?: Maybe<string>;
}
export type DeleteVerifiableDomainInput = {
  clientMutationId?: Maybe<string>;
  id: string;
}
export interface DeleteVerifiableDomainPayload {
  clientMutationId?: Maybe<string>;
  owner?: Maybe<VerifiableDomainOwner>;
}
export type DemilestonedEvent = Node &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  id: string;
  milestoneTitle: string;
  subject: MilestoneItem;
}
export type DependabotUpdate = RepositoryNode &  {
  error?: Maybe<DependabotUpdateError>;
  pullRequest?: Maybe<PullRequest>;
  repository: Repository;
}
export interface DependabotUpdateError {
  body: string;
  errorType: string;
  title: string;
}
export interface DependencyGraphDependency {
  hasDependencies: Boolean;
  packageLabel: string;
  packageManager?: Maybe<string>;
  packageName: string;
  repository?: Maybe<Repository>;
  requirements: string;
}
export interface DependencyGraphDependencyConnection {
  edges?: Maybe<Array<Maybe<DependencyGraphDependencyEdge>>>;
  nodes?: Maybe<Array<Maybe<DependencyGraphDependency>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface DependencyGraphDependencyEdge {
  cursor: string;
  node?: Maybe<DependencyGraphDependency>;
}
export enum DependencyGraphEcosystem {
  ACTIONS,
  COMPOSER,
  GO,
  MAVEN,
  NPM,
  NUGET,
  PIP,
  PUB,
  RUBYGEMS,
  RUST,
  SWIFT,
}
export type DependencyGraphManifest = Node &  {
  blobPath: string;
  dependencies?: Maybe<DependencyGraphDependencyConnection>;
  dependenciesCount?: Maybe<number>;
  exceedsMaxSize: Boolean;
  filename: string;
  id: string;
  parseable: Boolean;
  repository: Repository;
}
export interface DependencyGraphManifestDependenciesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface DependencyGraphManifestConnection {
  edges?: Maybe<Array<Maybe<DependencyGraphManifestEdge>>>;
  nodes?: Maybe<Array<Maybe<DependencyGraphManifest>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface DependencyGraphManifestEdge {
  cursor: string;
  node?: Maybe<DependencyGraphManifest>;
}
export type DeployKey = Node &  {
  createdAt: DateTime;
  id: string;
  key: string;
  readOnly: Boolean;
  title: string;
  verified: Boolean;
}
export interface DeployKeyConnection {
  edges?: Maybe<Array<Maybe<DeployKeyEdge>>>;
  nodes?: Maybe<Array<Maybe<DeployKey>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface DeployKeyEdge {
  cursor: string;
  node?: Maybe<DeployKey>;
}
export type DeployedEvent = Node &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  databaseId?: Maybe<number>;
  deployment: Deployment;
  id: string;
  pullRequest: PullRequest;
  ref?: Maybe<Ref>;
}
export type Deployment = Node &  {
  commit?: Maybe<Commit>;
  commitOid: string;
  createdAt: DateTime;
  creator: Actor;
  databaseId?: Maybe<number>;
  description?: Maybe<string>;
  environment?: Maybe<string>;
  id: string;
  latestEnvironment?: Maybe<string>;
  latestStatus?: Maybe<DeploymentStatus>;
  originalEnvironment?: Maybe<string>;
  payload?: Maybe<string>;
  ref?: Maybe<Ref>;
  repository: Repository;
  state?: Maybe<DeploymentState>;
  statuses?: Maybe<DeploymentStatusConnection>;
  task?: Maybe<string>;
  updatedAt: DateTime;
}
export interface DeploymentStatusesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface DeploymentConnection {
  edges?: Maybe<Array<Maybe<DeploymentEdge>>>;
  nodes?: Maybe<Array<Maybe<Deployment>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface DeploymentEdge {
  cursor: string;
  node?: Maybe<Deployment>;
}
export type DeploymentEnvironmentChangedEvent = Node &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  deploymentStatus: DeploymentStatus;
  id: string;
  pullRequest: PullRequest;
}
export type DeploymentOrder = {
  direction: OrderDirection;
  field: DeploymentOrderField;
}
export enum DeploymentOrderField {
  CREATED_AT,
}
export interface DeploymentProtectionRule {
  databaseId?: Maybe<number>;
  reviewers: DeploymentReviewerConnection;
  timeout: number;
  type: DeploymentProtectionRuleType;
}
export interface DeploymentProtectionRuleReviewersArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface DeploymentProtectionRuleConnection {
  edges?: Maybe<Array<Maybe<DeploymentProtectionRuleEdge>>>;
  nodes?: Maybe<Array<Maybe<DeploymentProtectionRule>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface DeploymentProtectionRuleEdge {
  cursor: string;
  node?: Maybe<DeploymentProtectionRule>;
}
export enum DeploymentProtectionRuleType {
  REQUIRED_REVIEWERS,
  WAIT_TIMER,
}
export interface DeploymentRequest {
  currentUserCanApprove: Boolean;
  environment: Environment;
  reviewers: DeploymentReviewerConnection;
  waitTimer: number;
  waitTimerStartedAt?: Maybe<DateTime>;
}
export interface DeploymentRequestReviewersArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface DeploymentRequestConnection {
  edges?: Maybe<Array<Maybe<DeploymentRequestEdge>>>;
  nodes?: Maybe<Array<Maybe<DeploymentRequest>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface DeploymentRequestEdge {
  cursor: string;
  node?: Maybe<DeploymentRequest>;
}
export type DeploymentReview = Node &  {
  comment: string;
  databaseId?: Maybe<number>;
  environments: EnvironmentConnection;
  id: string;
  state: DeploymentReviewState;
  user: User;
}
export interface DeploymentReviewEnvironmentsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface DeploymentReviewConnection {
  edges?: Maybe<Array<Maybe<DeploymentReviewEdge>>>;
  nodes?: Maybe<Array<Maybe<DeploymentReview>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface DeploymentReviewEdge {
  cursor: string;
  node?: Maybe<DeploymentReview>;
}
export enum DeploymentReviewState {
  APPROVED,
  REJECTED,
}
export type DeploymentReviewer = Team | User;
export interface DeploymentReviewerConnection {
  edges?: Maybe<Array<Maybe<DeploymentReviewerEdge>>>;
  nodes?: Maybe<Array<Maybe<DeploymentReviewer>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface DeploymentReviewerEdge {
  cursor: string;
  node?: Maybe<DeploymentReviewer>;
}
export enum DeploymentState {
  ABANDONED,
  ACTIVE,
  DESTROYED,
  ERROR,
  FAILURE,
  INACTIVE,
  IN_PROGRESS,
  PENDING,
  QUEUED,
  SUCCESS,
  WAITING,
}
export type DeploymentStatus = Node &  {
  createdAt: DateTime;
  creator: Actor;
  deployment: Deployment;
  description?: Maybe<string>;
  environment?: Maybe<string>;
  environmentUrl?: Maybe<URI>;
  id: string;
  logUrl?: Maybe<URI>;
  state: DeploymentStatusState;
  updatedAt: DateTime;
}
export interface DeploymentStatusConnection {
  edges?: Maybe<Array<Maybe<DeploymentStatusEdge>>>;
  nodes?: Maybe<Array<Maybe<DeploymentStatus>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface DeploymentStatusEdge {
  cursor: string;
  node?: Maybe<DeploymentStatus>;
}
export enum DeploymentStatusState {
  ERROR,
  FAILURE,
  INACTIVE,
  IN_PROGRESS,
  PENDING,
  QUEUED,
  SUCCESS,
  WAITING,
}
export type DequeuePullRequestInput = {
  clientMutationId?: Maybe<string>;
  id: string;
}
export interface DequeuePullRequestPayload {
  clientMutationId?: Maybe<string>;
  mergeQueueEntry?: Maybe<MergeQueueEntry>;
}
export enum DiffSide {
  LEFT,
  RIGHT,
}
export type DisablePullRequestAutoMergeInput = {
  clientMutationId?: Maybe<string>;
  pullRequestId: string;
}
export interface DisablePullRequestAutoMergePayload {
  actor?: Maybe<Actor>;
  clientMutationId?: Maybe<string>;
  pullRequest?: Maybe<PullRequest>;
}
export type DisconnectedEvent = Node &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  id: string;
  isCrossRepository: Boolean;
  source: ReferencedSubject;
  subject: ReferencedSubject;
}
export type Discussion = Closable & Comment & Deletable & Labelable & Lockable & Node & Reactable & RepositoryNode & Subscribable & Updatable & Votable &  {
  activeLockReason?: Maybe<LockReason>;
  answer?: Maybe<DiscussionComment>;
  answerChosenAt?: Maybe<DateTime>;
  answerChosenBy?: Maybe<Actor>;
  author?: Maybe<Actor>;
  authorAssociation: CommentAuthorAssociation;
  body: string;
  bodyHTML: HTML;
  bodyText: string;
  category: DiscussionCategory;
  closed: Boolean;
  closedAt?: Maybe<DateTime>;
  comments: DiscussionCommentConnection;
  createdAt: DateTime;
  createdViaEmail: Boolean;
  databaseId?: Maybe<number>;
  editor?: Maybe<Actor>;
  id: string;
  includesCreatedEdit: Boolean;
  labels?: Maybe<LabelConnection>;
  lastEditedAt?: Maybe<DateTime>;
  locked: Boolean;
  number: number;
  poll?: Maybe<DiscussionPoll>;
  publishedAt?: Maybe<DateTime>;
  reactionGroups?: Maybe<Array<ReactionGroup>>;
  reactions: ReactionConnection;
  repository: Repository;
  resourcePath: URI;
  stateReason?: Maybe<DiscussionStateReason>;
  title: string;
  updatedAt: DateTime;
  upvoteCount: number;
  url: URI;
  userContentEdits?: Maybe<UserContentEditConnection>;
  viewerCanClose: Boolean;
  viewerCanDelete: Boolean;
  viewerCanReact: Boolean;
  viewerCanReopen: Boolean;
  viewerCanSubscribe: Boolean;
  viewerCanUpdate: Boolean;
  viewerCanUpvote: Boolean;
  viewerDidAuthor: Boolean;
  viewerHasUpvoted: Boolean;
  viewerSubscription?: Maybe<SubscriptionState>;
}
export interface DiscussionCommentsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface DiscussionLabelsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<LabelOrder>;
}
export interface DiscussionReactionsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  content: Maybe<ReactionContent>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ReactionOrder>;
}
export interface DiscussionUserContentEditsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export type DiscussionCategory = Node & RepositoryNode &  {
  createdAt: DateTime;
  description?: Maybe<string>;
  emoji: string;
  emojiHTML: HTML;
  id: string;
  isAnswerable: Boolean;
  name: string;
  repository: Repository;
  slug: string;
  updatedAt: DateTime;
}
export interface DiscussionCategoryConnection {
  edges?: Maybe<Array<Maybe<DiscussionCategoryEdge>>>;
  nodes?: Maybe<Array<Maybe<DiscussionCategory>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface DiscussionCategoryEdge {
  cursor: string;
  node?: Maybe<DiscussionCategory>;
}
export enum DiscussionCloseReason {
  DUPLICATE,
  OUTDATED,
  RESOLVED,
}
export type DiscussionComment = Comment & Deletable & Minimizable & Node & Reactable & Updatable & UpdatableComment & Votable &  {
  author?: Maybe<Actor>;
  authorAssociation: CommentAuthorAssociation;
  body: string;
  bodyHTML: HTML;
  bodyText: string;
  createdAt: DateTime;
  createdViaEmail: Boolean;
  databaseId?: Maybe<number>;
  deletedAt?: Maybe<DateTime>;
  discussion?: Maybe<Discussion>;
  editor?: Maybe<Actor>;
  id: string;
  includesCreatedEdit: Boolean;
  isAnswer: Boolean;
  isMinimized: Boolean;
  lastEditedAt?: Maybe<DateTime>;
  minimizedReason?: Maybe<string>;
  publishedAt?: Maybe<DateTime>;
  reactionGroups?: Maybe<Array<ReactionGroup>>;
  reactions: ReactionConnection;
  replies: DiscussionCommentConnection;
  replyTo?: Maybe<DiscussionComment>;
  resourcePath: URI;
  updatedAt: DateTime;
  upvoteCount: number;
  url: URI;
  userContentEdits?: Maybe<UserContentEditConnection>;
  viewerCanDelete: Boolean;
  viewerCanMarkAsAnswer: Boolean;
  viewerCanMinimize: Boolean;
  viewerCanReact: Boolean;
  viewerCanUnmarkAsAnswer: Boolean;
  viewerCanUpdate: Boolean;
  viewerCanUpvote: Boolean;
  viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
  viewerDidAuthor: Boolean;
  viewerHasUpvoted: Boolean;
}
export interface DiscussionCommentReactionsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  content: Maybe<ReactionContent>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ReactionOrder>;
}
export interface DiscussionCommentRepliesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface DiscussionCommentUserContentEditsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface DiscussionCommentConnection {
  edges?: Maybe<Array<Maybe<DiscussionCommentEdge>>>;
  nodes?: Maybe<Array<Maybe<DiscussionComment>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface DiscussionCommentEdge {
  cursor: string;
  node?: Maybe<DiscussionComment>;
}
export interface DiscussionConnection {
  edges?: Maybe<Array<Maybe<DiscussionEdge>>>;
  nodes?: Maybe<Array<Maybe<Discussion>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface DiscussionEdge {
  cursor: string;
  node?: Maybe<Discussion>;
}
export type DiscussionOrder = {
  direction: OrderDirection;
  field: DiscussionOrderField;
}
export enum DiscussionOrderField {
  CREATED_AT,
  UPDATED_AT,
}
export type DiscussionPoll = Node &  {
  discussion?: Maybe<Discussion>;
  id: string;
  options?: Maybe<DiscussionPollOptionConnection>;
  question: string;
  totalVoteCount: number;
  viewerCanVote: Boolean;
  viewerHasVoted: Boolean;
}
export interface DiscussionPollOptionsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<DiscussionPollOptionOrder>;
}
export type DiscussionPollOption = Node &  {
  id: string;
  option: string;
  poll?: Maybe<DiscussionPoll>;
  totalVoteCount: number;
  viewerHasVoted: Boolean;
}
export interface DiscussionPollOptionConnection {
  edges?: Maybe<Array<Maybe<DiscussionPollOptionEdge>>>;
  nodes?: Maybe<Array<Maybe<DiscussionPollOption>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface DiscussionPollOptionEdge {
  cursor: string;
  node?: Maybe<DiscussionPollOption>;
}
export type DiscussionPollOptionOrder = {
  direction: OrderDirection;
  field: DiscussionPollOptionOrderField;
}
export enum DiscussionPollOptionOrderField {
  AUTHORED_ORDER,
  VOTE_COUNT,
}
export enum DiscussionState {
  CLOSED,
  OPEN,
}
export enum DiscussionStateReason {
  DUPLICATE,
  OUTDATED,
  REOPENED,
  RESOLVED,
}
export type DismissPullRequestReviewInput = {
  clientMutationId?: Maybe<string>;
  message: string;
  pullRequestReviewId: string;
}
export interface DismissPullRequestReviewPayload {
  clientMutationId?: Maybe<string>;
  pullRequestReview?: Maybe<PullRequestReview>;
}
export enum DismissReason {
  FIX_STARTED,
  INACCURATE,
  NOT_USED,
  NO_BANDWIDTH,
  TOLERABLE_RISK,
}
export type DismissRepositoryVulnerabilityAlertInput = {
  clientMutationId?: Maybe<string>;
  dismissReason: DismissReason;
  repositoryVulnerabilityAlertId: string;
}
export interface DismissRepositoryVulnerabilityAlertPayload {
  clientMutationId?: Maybe<string>;
  repositoryVulnerabilityAlert?: Maybe<RepositoryVulnerabilityAlert>;
}
export type DraftIssue = Node &  {
  assignees: UserConnection;
  body: string;
  bodyHTML: HTML;
  bodyText: string;
  createdAt: DateTime;
  creator?: Maybe<Actor>;
  id: string;
  projectV2Items: ProjectV2ItemConnection;
  projectsV2: ProjectV2Connection;
  title: string;
  updatedAt: DateTime;
}
export interface DraftIssueAssigneesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface DraftIssueProjectV2ItemsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface DraftIssueProjectsV2Args{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export type DraftPullRequestReviewComment = {
  body: string;
  path: string;
  position: number;
}
export type DraftPullRequestReviewThread = {
  body: string;
  line: number;
  path: string;
  side?: Maybe<DiffSide>;
  startLine?: Maybe<number>;
  startSide?: Maybe<DiffSide>;
}
export type EnablePullRequestAutoMergeInput = {
  authorEmail?: Maybe<string>;
  clientMutationId?: Maybe<string>;
  commitBody?: Maybe<string>;
  commitHeadline?: Maybe<string>;
  expectedHeadOid?: Maybe<GitObjectID>;
  mergeMethod?: Maybe<PullRequestMergeMethod>;
  pullRequestId: string;
}
export interface EnablePullRequestAutoMergePayload {
  actor?: Maybe<Actor>;
  clientMutationId?: Maybe<string>;
  pullRequest?: Maybe<PullRequest>;
}
export type EnqueuePullRequestInput = {
  clientMutationId?: Maybe<string>;
  expectedHeadOid?: Maybe<GitObjectID>;
  jump?: Maybe<Boolean>;
  pullRequestId: string;
}
export interface EnqueuePullRequestPayload {
  clientMutationId?: Maybe<string>;
  mergeQueueEntry?: Maybe<MergeQueueEntry>;
}
export type Enterprise = AnnouncementBanner & Node &  {
  announcement?: Maybe<string>;
  announcementExpiresAt?: Maybe<DateTime>;
  announcementUserDismissible?: Maybe<Boolean>;
  avatarUrl: URI;
  billingInfo?: Maybe<EnterpriseBillingInfo>;
  createdAt: DateTime;
  databaseId?: Maybe<number>;
  description?: Maybe<string>;
  descriptionHTML: HTML;
  id: string;
  location?: Maybe<string>;
  members: EnterpriseMemberConnection;
  name: string;
  organizations: OrganizationConnection;
  ownerInfo?: Maybe<EnterpriseOwnerInfo>;
  resourcePath: URI;
  slug: string;
  url: URI;
  viewerIsAdmin: Boolean;
  websiteUrl?: Maybe<URI>;
}
export interface EnterpriseAvatarUrlArgs{
  size: Maybe<number>;
}
export interface EnterpriseMembersArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  deployment: Maybe<EnterpriseUserDeployment>;
  first: Maybe<number>;
  hasTwoFactorEnabled: Maybe<Boolean>;
  last: Maybe<number>;
  orderBy: Maybe<EnterpriseMemberOrder>;
  organizationLogins: Maybe<Array<string>>;
  query: Maybe<string>;
  role: Maybe<EnterpriseUserAccountMembershipRole>;
}
export interface EnterpriseOrganizationsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<OrganizationOrder>;
  query: Maybe<string>;
  viewerOrganizationRole: Maybe<RoleInOrganization>;
}
export interface EnterpriseAdministratorConnection {
  edges?: Maybe<Array<Maybe<EnterpriseAdministratorEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface EnterpriseAdministratorEdge {
  cursor: string;
  node?: Maybe<User>;
  role: EnterpriseAdministratorRole;
}
export type EnterpriseAdministratorInvitation = Node &  {
  createdAt: DateTime;
  email?: Maybe<string>;
  enterprise: Enterprise;
  id: string;
  invitee?: Maybe<User>;
  inviter?: Maybe<User>;
  role: EnterpriseAdministratorRole;
}
export interface EnterpriseAdministratorInvitationConnection {
  edges?: Maybe<Array<Maybe<EnterpriseAdministratorInvitationEdge>>>;
  nodes?: Maybe<Array<Maybe<EnterpriseAdministratorInvitation>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface EnterpriseAdministratorInvitationEdge {
  cursor: string;
  node?: Maybe<EnterpriseAdministratorInvitation>;
}
export type EnterpriseAdministratorInvitationOrder = {
  direction: OrderDirection;
  field: EnterpriseAdministratorInvitationOrderField;
}
export enum EnterpriseAdministratorInvitationOrderField {
  CREATED_AT,
}
export enum EnterpriseAdministratorRole {
  BILLING_MANAGER,
  OWNER,
}
export enum EnterpriseAllowPrivateRepositoryForkingPolicyValue {
  ENTERPRISE_ORGANIZATIONS,
  ENTERPRISE_ORGANIZATIONS_USER_ACCOUNTS,
  EVERYWHERE,
  SAME_ORGANIZATION,
  SAME_ORGANIZATION_USER_ACCOUNTS,
  USER_ACCOUNTS,
}
export interface EnterpriseAuditEntryData {
  enterpriseResourcePath?: Maybe<URI>;
  enterpriseSlug?: Maybe<string>;
  enterpriseUrl?: Maybe<URI>;
}
export interface EnterpriseBillingInfo {
  allLicensableUsersCount: number;
  assetPacks: number;
  bandwidthQuota: number;
  bandwidthUsage: number;
  bandwidthUsagePercentage: number;
  storageQuota: number;
  storageUsage: number;
  storageUsagePercentage: number;
  totalAvailableLicenses: number;
  totalLicenses: number;
}
export enum EnterpriseDefaultRepositoryPermissionSettingValue {
  ADMIN,
  NONE,
  NO_POLICY,
  READ,
  WRITE,
}
export enum EnterpriseEnabledDisabledSettingValue {
  DISABLED,
  ENABLED,
  NO_POLICY,
}
export enum EnterpriseEnabledSettingValue {
  ENABLED,
  NO_POLICY,
}
export interface EnterpriseFailedInvitationConnection {
  edges?: Maybe<Array<Maybe<EnterpriseFailedInvitationEdge>>>;
  nodes?: Maybe<Array<Maybe<OrganizationInvitation>>>;
  pageInfo: PageInfo;
  totalCount: number;
  totalUniqueUserCount: number;
}
export interface EnterpriseFailedInvitationEdge {
  cursor: string;
  node?: Maybe<OrganizationInvitation>;
}
export type EnterpriseIdentityProvider = Node &  {
  digestMethod?: Maybe<SamlDigestAlgorithm>;
  enterprise?: Maybe<Enterprise>;
  externalIdentities: ExternalIdentityConnection;
  id: string;
  idpCertificate?: Maybe<X509Certificate>;
  issuer?: Maybe<string>;
  recoveryCodes?: Maybe<Array<string>>;
  signatureMethod?: Maybe<SamlSignatureAlgorithm>;
  ssoUrl?: Maybe<URI>;
}
export interface EnterpriseIdentityProviderExternalIdentitiesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  login: Maybe<string>;
  membersOnly: Maybe<Boolean>;
  userName: Maybe<string>;
}
export type EnterpriseMember = EnterpriseUserAccount | User;
export interface EnterpriseMemberConnection {
  edges?: Maybe<Array<Maybe<EnterpriseMemberEdge>>>;
  nodes?: Maybe<Array<Maybe<EnterpriseMember>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface EnterpriseMemberEdge {
  cursor: string;
  node?: Maybe<EnterpriseMember>;
}
export type EnterpriseMemberOrder = {
  direction: OrderDirection;
  field: EnterpriseMemberOrderField;
}
export enum EnterpriseMemberOrderField {
  CREATED_AT,
  LOGIN,
}
export enum EnterpriseMembersCanCreateRepositoriesSettingValue {
  ALL,
  DISABLED,
  NO_POLICY,
  PRIVATE,
  PUBLIC,
}
export enum EnterpriseMembersCanMakePurchasesSettingValue {
  DISABLED,
  ENABLED,
}
export interface EnterpriseOrganizationMembershipConnection {
  edges?: Maybe<Array<Maybe<EnterpriseOrganizationMembershipEdge>>>;
  nodes?: Maybe<Array<Maybe<Organization>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface EnterpriseOrganizationMembershipEdge {
  cursor: string;
  node?: Maybe<Organization>;
  role: EnterpriseUserAccountMembershipRole;
}
export interface EnterpriseOutsideCollaboratorConnection {
  edges?: Maybe<Array<Maybe<EnterpriseOutsideCollaboratorEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface EnterpriseOutsideCollaboratorEdge {
  cursor: string;
  node?: Maybe<User>;
  repositories: EnterpriseRepositoryInfoConnection;
}
export interface EnterpriseOutsideCollaboratorEdgeRepositoriesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<RepositoryOrder>;
}
export interface EnterpriseOwnerInfo {
  admins: EnterpriseAdministratorConnection;
  affiliatedUsersWithTwoFactorDisabled: UserConnection;
  affiliatedUsersWithTwoFactorDisabledExist: Boolean;
  allowPrivateRepositoryForkingSetting: EnterpriseEnabledDisabledSettingValue;
  allowPrivateRepositoryForkingSettingOrganizations: OrganizationConnection;
  allowPrivateRepositoryForkingSettingPolicyValue?: Maybe<EnterpriseAllowPrivateRepositoryForkingPolicyValue>;
  defaultRepositoryPermissionSetting: EnterpriseDefaultRepositoryPermissionSettingValue;
  defaultRepositoryPermissionSettingOrganizations: OrganizationConnection;
  domains: VerifiableDomainConnection;
  enterpriseServerInstallations: EnterpriseServerInstallationConnection;
  failedInvitations: EnterpriseFailedInvitationConnection;
  ipAllowListEnabledSetting: IpAllowListEnabledSettingValue;
  ipAllowListEntries: IpAllowListEntryConnection;
  ipAllowListForInstalledAppsEnabledSetting: IpAllowListForInstalledAppsEnabledSettingValue;
  isUpdatingDefaultRepositoryPermission: Boolean;
  isUpdatingTwoFactorRequirement: Boolean;
  membersCanChangeRepositoryVisibilitySetting: EnterpriseEnabledDisabledSettingValue;
  membersCanChangeRepositoryVisibilitySettingOrganizations: OrganizationConnection;
  membersCanCreateInternalRepositoriesSetting?: Maybe<Boolean>;
  membersCanCreatePrivateRepositoriesSetting?: Maybe<Boolean>;
  membersCanCreatePublicRepositoriesSetting?: Maybe<Boolean>;
  membersCanCreateRepositoriesSetting?: Maybe<EnterpriseMembersCanCreateRepositoriesSettingValue>;
  membersCanCreateRepositoriesSettingOrganizations: OrganizationConnection;
  membersCanDeleteIssuesSetting: EnterpriseEnabledDisabledSettingValue;
  membersCanDeleteIssuesSettingOrganizations: OrganizationConnection;
  membersCanDeleteRepositoriesSetting: EnterpriseEnabledDisabledSettingValue;
  membersCanDeleteRepositoriesSettingOrganizations: OrganizationConnection;
  membersCanInviteCollaboratorsSetting: EnterpriseEnabledDisabledSettingValue;
  membersCanInviteCollaboratorsSettingOrganizations: OrganizationConnection;
  membersCanMakePurchasesSetting: EnterpriseMembersCanMakePurchasesSettingValue;
  membersCanUpdateProtectedBranchesSetting: EnterpriseEnabledDisabledSettingValue;
  membersCanUpdateProtectedBranchesSettingOrganizations: OrganizationConnection;
  membersCanViewDependencyInsightsSetting: EnterpriseEnabledDisabledSettingValue;
  membersCanViewDependencyInsightsSettingOrganizations: OrganizationConnection;
  notificationDeliveryRestrictionEnabledSetting: NotificationRestrictionSettingValue;
  oidcProvider?: Maybe<OIDCProvider>;
  organizationProjectsSetting: EnterpriseEnabledDisabledSettingValue;
  organizationProjectsSettingOrganizations: OrganizationConnection;
  outsideCollaborators: EnterpriseOutsideCollaboratorConnection;
  pendingAdminInvitations: EnterpriseAdministratorInvitationConnection;
  pendingCollaboratorInvitations: RepositoryInvitationConnection;
  pendingMemberInvitations: EnterprisePendingMemberInvitationConnection;
  repositoryProjectsSetting: EnterpriseEnabledDisabledSettingValue;
  repositoryProjectsSettingOrganizations: OrganizationConnection;
  samlIdentityProvider?: Maybe<EnterpriseIdentityProvider>;
  samlIdentityProviderSettingOrganizations: OrganizationConnection;
  supportEntitlements: EnterpriseMemberConnection;
  teamDiscussionsSetting: EnterpriseEnabledDisabledSettingValue;
  teamDiscussionsSettingOrganizations: OrganizationConnection;
  twoFactorRequiredSetting: EnterpriseEnabledSettingValue;
  twoFactorRequiredSettingOrganizations: OrganizationConnection;
}
export interface EnterpriseOwnerInfoAdminsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  hasTwoFactorEnabled: Maybe<Boolean>;
  last: Maybe<number>;
  orderBy: Maybe<EnterpriseMemberOrder>;
  organizationLogins: Maybe<Array<string>>;
  query: Maybe<string>;
  role: Maybe<EnterpriseAdministratorRole>;
}
export interface EnterpriseOwnerInfoAffiliatedUsersWithTwoFactorDisabledArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface EnterpriseOwnerInfoAllowPrivateRepositoryForkingSettingOrganizationsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<OrganizationOrder>;
  value: Boolean;
}
export interface EnterpriseOwnerInfoDefaultRepositoryPermissionSettingOrganizationsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<OrganizationOrder>;
  value: DefaultRepositoryPermissionField;
}
export interface EnterpriseOwnerInfoDomainsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  isApproved: Maybe<Boolean>;
  isVerified: Maybe<Boolean>;
  last: Maybe<number>;
  orderBy: Maybe<VerifiableDomainOrder>;
}
export interface EnterpriseOwnerInfoEnterpriseServerInstallationsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  connectedOnly: Maybe<Boolean>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<EnterpriseServerInstallationOrder>;
}
export interface EnterpriseOwnerInfoFailedInvitationsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  query: Maybe<string>;
}
export interface EnterpriseOwnerInfoIpAllowListEntriesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<IpAllowListEntryOrder>;
}
export interface EnterpriseOwnerInfoMembersCanChangeRepositoryVisibilitySettingOrganizationsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<OrganizationOrder>;
  value: Boolean;
}
export interface EnterpriseOwnerInfoMembersCanCreateRepositoriesSettingOrganizationsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<OrganizationOrder>;
  value: OrganizationMembersCanCreateRepositoriesSettingValue;
}
export interface EnterpriseOwnerInfoMembersCanDeleteIssuesSettingOrganizationsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<OrganizationOrder>;
  value: Boolean;
}
export interface EnterpriseOwnerInfoMembersCanDeleteRepositoriesSettingOrganizationsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<OrganizationOrder>;
  value: Boolean;
}
export interface EnterpriseOwnerInfoMembersCanInviteCollaboratorsSettingOrganizationsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<OrganizationOrder>;
  value: Boolean;
}
export interface EnterpriseOwnerInfoMembersCanUpdateProtectedBranchesSettingOrganizationsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<OrganizationOrder>;
  value: Boolean;
}
export interface EnterpriseOwnerInfoMembersCanViewDependencyInsightsSettingOrganizationsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<OrganizationOrder>;
  value: Boolean;
}
export interface EnterpriseOwnerInfoOrganizationProjectsSettingOrganizationsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<OrganizationOrder>;
  value: Boolean;
}
export interface EnterpriseOwnerInfoOutsideCollaboratorsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  hasTwoFactorEnabled: Maybe<Boolean>;
  last: Maybe<number>;
  login: Maybe<string>;
  orderBy: Maybe<EnterpriseMemberOrder>;
  organizationLogins: Maybe<Array<string>>;
  query: Maybe<string>;
  visibility: Maybe<RepositoryVisibility>;
}
export interface EnterpriseOwnerInfoPendingAdminInvitationsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<EnterpriseAdministratorInvitationOrder>;
  query: Maybe<string>;
  role: Maybe<EnterpriseAdministratorRole>;
}
export interface EnterpriseOwnerInfoPendingCollaboratorInvitationsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<RepositoryInvitationOrder>;
  query: Maybe<string>;
}
export interface EnterpriseOwnerInfoPendingMemberInvitationsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  invitationSource: Maybe<OrganizationInvitationSource>;
  last: Maybe<number>;
  organizationLogins: Maybe<Array<string>>;
  query: Maybe<string>;
}
export interface EnterpriseOwnerInfoRepositoryProjectsSettingOrganizationsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<OrganizationOrder>;
  value: Boolean;
}
export interface EnterpriseOwnerInfoSamlIdentityProviderSettingOrganizationsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<OrganizationOrder>;
  value: IdentityProviderConfigurationState;
}
export interface EnterpriseOwnerInfoSupportEntitlementsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<EnterpriseMemberOrder>;
}
export interface EnterpriseOwnerInfoTeamDiscussionsSettingOrganizationsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<OrganizationOrder>;
  value: Boolean;
}
export interface EnterpriseOwnerInfoTwoFactorRequiredSettingOrganizationsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<OrganizationOrder>;
  value: Boolean;
}
export interface EnterprisePendingMemberInvitationConnection {
  edges?: Maybe<Array<Maybe<EnterprisePendingMemberInvitationEdge>>>;
  nodes?: Maybe<Array<Maybe<OrganizationInvitation>>>;
  pageInfo: PageInfo;
  totalCount: number;
  totalUniqueUserCount: number;
}
export interface EnterprisePendingMemberInvitationEdge {
  cursor: string;
  node?: Maybe<OrganizationInvitation>;
}
export type EnterpriseRepositoryInfo = Node &  {
  id: string;
  isPrivate: Boolean;
  name: string;
  nameWithOwner: string;
}
export interface EnterpriseRepositoryInfoConnection {
  edges?: Maybe<Array<Maybe<EnterpriseRepositoryInfoEdge>>>;
  nodes?: Maybe<Array<Maybe<EnterpriseRepositoryInfo>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface EnterpriseRepositoryInfoEdge {
  cursor: string;
  node?: Maybe<EnterpriseRepositoryInfo>;
}
export type EnterpriseServerInstallation = Node &  {
  createdAt: DateTime;
  customerName: string;
  hostName: string;
  id: string;
  isConnected: Boolean;
  updatedAt: DateTime;
  userAccounts: EnterpriseServerUserAccountConnection;
  userAccountsUploads: EnterpriseServerUserAccountsUploadConnection;
}
export interface EnterpriseServerInstallationUserAccountsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<EnterpriseServerUserAccountOrder>;
}
export interface EnterpriseServerInstallationUserAccountsUploadsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<EnterpriseServerUserAccountsUploadOrder>;
}
export interface EnterpriseServerInstallationConnection {
  edges?: Maybe<Array<Maybe<EnterpriseServerInstallationEdge>>>;
  nodes?: Maybe<Array<Maybe<EnterpriseServerInstallation>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface EnterpriseServerInstallationEdge {
  cursor: string;
  node?: Maybe<EnterpriseServerInstallation>;
}
export interface EnterpriseServerInstallationMembershipConnection {
  edges?: Maybe<Array<Maybe<EnterpriseServerInstallationMembershipEdge>>>;
  nodes?: Maybe<Array<Maybe<EnterpriseServerInstallation>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface EnterpriseServerInstallationMembershipEdge {
  cursor: string;
  node?: Maybe<EnterpriseServerInstallation>;
  role: EnterpriseUserAccountMembershipRole;
}
export type EnterpriseServerInstallationOrder = {
  direction: OrderDirection;
  field: EnterpriseServerInstallationOrderField;
}
export enum EnterpriseServerInstallationOrderField {
  CREATED_AT,
  CUSTOMER_NAME,
  HOST_NAME,
}
export type EnterpriseServerUserAccount = Node &  {
  createdAt: DateTime;
  emails: EnterpriseServerUserAccountEmailConnection;
  enterpriseServerInstallation: EnterpriseServerInstallation;
  id: string;
  isSiteAdmin: Boolean;
  login: string;
  profileName?: Maybe<string>;
  remoteCreatedAt: DateTime;
  remoteUserId: number;
  updatedAt: DateTime;
}
export interface EnterpriseServerUserAccountEmailsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<EnterpriseServerUserAccountEmailOrder>;
}
export interface EnterpriseServerUserAccountConnection {
  edges?: Maybe<Array<Maybe<EnterpriseServerUserAccountEdge>>>;
  nodes?: Maybe<Array<Maybe<EnterpriseServerUserAccount>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface EnterpriseServerUserAccountEdge {
  cursor: string;
  node?: Maybe<EnterpriseServerUserAccount>;
}
export type EnterpriseServerUserAccountEmail = Node &  {
  createdAt: DateTime;
  email: string;
  id: string;
  isPrimary: Boolean;
  updatedAt: DateTime;
  userAccount: EnterpriseServerUserAccount;
}
export interface EnterpriseServerUserAccountEmailConnection {
  edges?: Maybe<Array<Maybe<EnterpriseServerUserAccountEmailEdge>>>;
  nodes?: Maybe<Array<Maybe<EnterpriseServerUserAccountEmail>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface EnterpriseServerUserAccountEmailEdge {
  cursor: string;
  node?: Maybe<EnterpriseServerUserAccountEmail>;
}
export type EnterpriseServerUserAccountEmailOrder = {
  direction: OrderDirection;
  field: EnterpriseServerUserAccountEmailOrderField;
}
export enum EnterpriseServerUserAccountEmailOrderField {
  EMAIL,
}
export type EnterpriseServerUserAccountOrder = {
  direction: OrderDirection;
  field: EnterpriseServerUserAccountOrderField;
}
export enum EnterpriseServerUserAccountOrderField {
  LOGIN,
  REMOTE_CREATED_AT,
}
export type EnterpriseServerUserAccountsUpload = Node &  {
  createdAt: DateTime;
  enterprise: Enterprise;
  enterpriseServerInstallation: EnterpriseServerInstallation;
  id: string;
  name: string;
  syncState: EnterpriseServerUserAccountsUploadSyncState;
  updatedAt: DateTime;
}
export interface EnterpriseServerUserAccountsUploadConnection {
  edges?: Maybe<Array<Maybe<EnterpriseServerUserAccountsUploadEdge>>>;
  nodes?: Maybe<Array<Maybe<EnterpriseServerUserAccountsUpload>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface EnterpriseServerUserAccountsUploadEdge {
  cursor: string;
  node?: Maybe<EnterpriseServerUserAccountsUpload>;
}
export type EnterpriseServerUserAccountsUploadOrder = {
  direction: OrderDirection;
  field: EnterpriseServerUserAccountsUploadOrderField;
}
export enum EnterpriseServerUserAccountsUploadOrderField {
  CREATED_AT,
}
export enum EnterpriseServerUserAccountsUploadSyncState {
  FAILURE,
  PENDING,
  SUCCESS,
}
export type EnterpriseUserAccount = Actor & Node &  {
  avatarUrl: URI;
  createdAt: DateTime;
  enterprise: Enterprise;
  enterpriseInstallations: EnterpriseServerInstallationMembershipConnection;
  id: string;
  login: string;
  name?: Maybe<string>;
  organizations: EnterpriseOrganizationMembershipConnection;
  resourcePath: URI;
  updatedAt: DateTime;
  url: URI;
  user?: Maybe<User>;
}
export interface EnterpriseUserAccountAvatarUrlArgs{
  size: Maybe<number>;
}
export interface EnterpriseUserAccountEnterpriseInstallationsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<EnterpriseServerInstallationOrder>;
  query: Maybe<string>;
  role: Maybe<EnterpriseUserAccountMembershipRole>;
}
export interface EnterpriseUserAccountOrganizationsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<OrganizationOrder>;
  query: Maybe<string>;
  role: Maybe<EnterpriseUserAccountMembershipRole>;
}
export enum EnterpriseUserAccountMembershipRole {
  MEMBER,
  OWNER,
  UNAFFILIATED,
}
export enum EnterpriseUserDeployment {
  CLOUD,
  SERVER,
}
export type Environment = Node &  {
  databaseId?: Maybe<number>;
  id: string;
  name: string;
  protectionRules: DeploymentProtectionRuleConnection;
}
export interface EnvironmentProtectionRulesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface EnvironmentConnection {
  edges?: Maybe<Array<Maybe<EnvironmentEdge>>>;
  nodes?: Maybe<Array<Maybe<Environment>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface EnvironmentEdge {
  cursor: string;
  node?: Maybe<Environment>;
}
export enum EnvironmentOrderField {
  NAME,
}
export type Environments = {
  direction: OrderDirection;
  field: EnvironmentOrderField;
}
export type ExternalIdentity = Node &  {
  guid: string;
  id: string;
  organizationInvitation?: Maybe<OrganizationInvitation>;
  samlIdentity?: Maybe<ExternalIdentitySamlAttributes>;
  scimIdentity?: Maybe<ExternalIdentityScimAttributes>;
  user?: Maybe<User>;
}
export interface ExternalIdentityAttribute {
  metadata?: Maybe<string>;
  name: string;
  value: string;
}
export interface ExternalIdentityConnection {
  edges?: Maybe<Array<Maybe<ExternalIdentityEdge>>>;
  nodes?: Maybe<Array<Maybe<ExternalIdentity>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface ExternalIdentityEdge {
  cursor: string;
  node?: Maybe<ExternalIdentity>;
}
export interface ExternalIdentitySamlAttributes {
  attributes: Array<ExternalIdentityAttribute>;
  emails?: Maybe<Array<UserEmailMetadata>>;
  familyName?: Maybe<string>;
  givenName?: Maybe<string>;
  groups?: Maybe<Array<string>>;
  nameId?: Maybe<string>;
  username?: Maybe<string>;
}
export interface ExternalIdentityScimAttributes {
  emails?: Maybe<Array<UserEmailMetadata>>;
  familyName?: Maybe<string>;
  givenName?: Maybe<string>;
  groups?: Maybe<Array<string>>;
  username?: Maybe<string>;
}
export type FileAddition = {
  contents: Base64String;
  path: string;
}
export type FileChanges = {
  additions?: Maybe<Array<FileAddition>>;
  deletions?: Maybe<Array<FileDeletion>>;
}
export type FileDeletion = {
  path: string;
}
export enum FileViewedState {
  DISMISSED,
  UNVIEWED,
  VIEWED,
}
export type FollowOrganizationInput = {
  clientMutationId?: Maybe<string>;
  organizationId: string;
}
export interface FollowOrganizationPayload {
  clientMutationId?: Maybe<string>;
  organization?: Maybe<Organization>;
}
export type FollowUserInput = {
  clientMutationId?: Maybe<string>;
  userId: string;
}
export interface FollowUserPayload {
  clientMutationId?: Maybe<string>;
  user?: Maybe<User>;
}
export interface FollowerConnection {
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface FollowingConnection {
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface FundingLink {
  platform: FundingPlatform;
  url: URI;
}
export enum FundingPlatform {
  COMMUNITY_BRIDGE,
  CUSTOM,
  GITHUB,
  ISSUEHUNT,
  KO_FI,
  LFX_CROWDFUNDING,
  LIBERAPAY,
  OPEN_COLLECTIVE,
  OTECHIE,
  PATREON,
  TIDELIFT,
}
export type GenericHovercardContext = HovercardContext &  {
  message: string;
  octicon: string;
}
export type Gist = Node & Starrable & UniformResourceLocatable &  {
  comments: GistCommentConnection;
  createdAt: DateTime;
  description?: Maybe<string>;
  files?: Maybe<Array<Maybe<GistFile>>>;
  forks: GistConnection;
  id: string;
  isFork: Boolean;
  isPublic: Boolean;
  name: string;
  owner?: Maybe<RepositoryOwner>;
  pushedAt?: Maybe<DateTime>;
  resourcePath: URI;
  stargazerCount: number;
  stargazers: StargazerConnection;
  updatedAt: DateTime;
  url: URI;
  viewerHasStarred: Boolean;
}
export interface GistCommentsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface GistFilesArgs{
  limit: Maybe<number>;
  oid: Maybe<GitObjectID>;
}
export interface GistForksArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<GistOrder>;
}
export interface GistStargazersArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<StarOrder>;
}
export type GistComment = Comment & Deletable & Minimizable & Node & Updatable & UpdatableComment &  {
  author?: Maybe<Actor>;
  authorAssociation: CommentAuthorAssociation;
  body: string;
  bodyHTML: HTML;
  bodyText: string;
  createdAt: DateTime;
  createdViaEmail: Boolean;
  databaseId?: Maybe<number>;
  editor?: Maybe<Actor>;
  gist: Gist;
  id: string;
  includesCreatedEdit: Boolean;
  isMinimized: Boolean;
  lastEditedAt?: Maybe<DateTime>;
  minimizedReason?: Maybe<string>;
  publishedAt?: Maybe<DateTime>;
  updatedAt: DateTime;
  userContentEdits?: Maybe<UserContentEditConnection>;
  viewerCanDelete: Boolean;
  viewerCanMinimize: Boolean;
  viewerCanUpdate: Boolean;
  viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
  viewerDidAuthor: Boolean;
}
export interface GistCommentUserContentEditsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface GistCommentConnection {
  edges?: Maybe<Array<Maybe<GistCommentEdge>>>;
  nodes?: Maybe<Array<Maybe<GistComment>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface GistCommentEdge {
  cursor: string;
  node?: Maybe<GistComment>;
}
export interface GistConnection {
  edges?: Maybe<Array<Maybe<GistEdge>>>;
  nodes?: Maybe<Array<Maybe<Gist>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface GistEdge {
  cursor: string;
  node?: Maybe<Gist>;
}
export interface GistFile {
  encodedName?: Maybe<string>;
  encoding?: Maybe<string>;
  extension?: Maybe<string>;
  isImage: Boolean;
  isTruncated: Boolean;
  language?: Maybe<Language>;
  name?: Maybe<string>;
  size?: Maybe<number>;
  text?: Maybe<string>;
}
export interface GistFileTextArgs{
  truncate: Maybe<number>;
}
export type GistOrder = {
  direction: OrderDirection;
  field: GistOrderField;
}
export enum GistOrderField {
  CREATED_AT,
  PUSHED_AT,
  UPDATED_AT,
}
export enum GistPrivacy {
  ALL,
  PUBLIC,
  SECRET,
}
export interface GitActor {
  avatarUrl: URI;
  date?: Maybe<GitTimestamp>;
  email?: Maybe<string>;
  name?: Maybe<string>;
  user?: Maybe<User>;
}
export interface GitActorAvatarUrlArgs{
  size: Maybe<number>;
}
export interface GitActorConnection {
  edges?: Maybe<Array<Maybe<GitActorEdge>>>;
  nodes?: Maybe<Array<Maybe<GitActor>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface GitActorEdge {
  cursor: string;
  node?: Maybe<GitActor>;
}
export interface GitHubMetadata {
  gitHubServicesSha: GitObjectID;
  gitIpAddresses?: Maybe<Array<string>>;
  githubEnterpriseImporterIpAddresses?: Maybe<Array<string>>;
  hookIpAddresses?: Maybe<Array<string>>;
  importerIpAddresses?: Maybe<Array<string>>;
  isPasswordAuthenticationVerifiable: Boolean;
  pagesIpAddresses?: Maybe<Array<string>>;
}
export interface GitObject {
  abbreviatedOid: string;
  commitResourcePath: URI;
  commitUrl: URI;
  id: string;
  oid: GitObjectID;
  repository: Repository;
}
export interface GitSignature {
  email: string;
  isValid: Boolean;
  payload: string;
  signature: string;
  signer?: Maybe<User>;
  state: GitSignatureState;
  wasSignedByGitHub: Boolean;
}
export enum GitSignatureState {
  BAD_CERT,
  BAD_EMAIL,
  EXPIRED_KEY,
  GPGVERIFY_ERROR,
  GPGVERIFY_UNAVAILABLE,
  INVALID,
  MALFORMED_SIG,
  NOT_SIGNING_KEY,
  NO_USER,
  OCSP_ERROR,
  OCSP_PENDING,
  OCSP_REVOKED,
  UNKNOWN_KEY,
  UNKNOWN_SIG_TYPE,
  UNSIGNED,
  UNVERIFIED_EMAIL,
  VALID,
}
export type GpgSignature = GitSignature &  {
  email: string;
  isValid: Boolean;
  keyId?: Maybe<string>;
  payload: string;
  signature: string;
  signer?: Maybe<User>;
  state: GitSignatureState;
  wasSignedByGitHub: Boolean;
}
export type GrantEnterpriseOrganizationsMigratorRoleInput = {
  clientMutationId?: Maybe<string>;
  enterpriseId: string;
  login: string;
}
export interface GrantEnterpriseOrganizationsMigratorRolePayload {
  clientMutationId?: Maybe<string>;
  organizations?: Maybe<OrganizationConnection>;
}
export interface GrantEnterpriseOrganizationsMigratorRolePayloadOrganizationsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export type GrantMigratorRoleInput = {
  actor: string;
  actorType: ActorType;
  clientMutationId?: Maybe<string>;
  organizationId: string;
}
export interface GrantMigratorRolePayload {
  clientMutationId?: Maybe<string>;
  success?: Maybe<Boolean>;
}
export type HeadRefDeletedEvent = Node &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  headRef?: Maybe<Ref>;
  headRefName: string;
  id: string;
  pullRequest: PullRequest;
}
export type HeadRefForcePushedEvent = Node &  {
  actor?: Maybe<Actor>;
  afterCommit?: Maybe<Commit>;
  beforeCommit?: Maybe<Commit>;
  createdAt: DateTime;
  id: string;
  pullRequest: PullRequest;
  ref?: Maybe<Ref>;
}
export type HeadRefRestoredEvent = Node &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  id: string;
  pullRequest: PullRequest;
}
export interface Hovercard {
  contexts: Array<HovercardContext>;
}
export interface HovercardContext {
  message: string;
  octicon: string;
}
export enum IdentityProviderConfigurationState {
  CONFIGURED,
  ENFORCED,
  UNCONFIGURED,
}
export type ImportProjectInput = {
  body?: Maybe<string>;
  clientMutationId?: Maybe<string>;
  columnImports: Array<ProjectColumnImport>;
  name: string;
  ownerName: string;
  public?: Maybe<Boolean>;
}
export interface ImportProjectPayload {
  clientMutationId?: Maybe<string>;
  project?: Maybe<Project>;
}
export type InviteEnterpriseAdminInput = {
  clientMutationId?: Maybe<string>;
  email?: Maybe<string>;
  enterpriseId: string;
  invitee?: Maybe<string>;
  role?: Maybe<EnterpriseAdministratorRole>;
}
export interface InviteEnterpriseAdminPayload {
  clientMutationId?: Maybe<string>;
  invitation?: Maybe<EnterpriseAdministratorInvitation>;
}
export enum IpAllowListEnabledSettingValue {
  DISABLED,
  ENABLED,
}
export type IpAllowListEntry = Node &  {
  allowListValue: string;
  createdAt: DateTime;
  id: string;
  isActive: Boolean;
  name?: Maybe<string>;
  owner: IpAllowListOwner;
  updatedAt: DateTime;
}
export interface IpAllowListEntryConnection {
  edges?: Maybe<Array<Maybe<IpAllowListEntryEdge>>>;
  nodes?: Maybe<Array<Maybe<IpAllowListEntry>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface IpAllowListEntryEdge {
  cursor: string;
  node?: Maybe<IpAllowListEntry>;
}
export type IpAllowListEntryOrder = {
  direction: OrderDirection;
  field: IpAllowListEntryOrderField;
}
export enum IpAllowListEntryOrderField {
  ALLOW_LIST_VALUE,
  CREATED_AT,
}
export enum IpAllowListForInstalledAppsEnabledSettingValue {
  DISABLED,
  ENABLED,
}
export type IpAllowListOwner = App | Enterprise | Organization;
export type Issue = Assignable & Closable & Comment & Deletable & Labelable & Lockable & Node & ProjectV2Owner & Reactable & RepositoryNode & Subscribable & SubscribableThread & UniformResourceLocatable & Updatable & UpdatableComment &  {
  activeLockReason?: Maybe<LockReason>;
  assignees: UserConnection;
  author?: Maybe<Actor>;
  authorAssociation: CommentAuthorAssociation;
  body: string;
  bodyHTML: HTML;
  bodyResourcePath: URI;
  bodyText: string;
  bodyUrl: URI;
  closed: Boolean;
  closedAt?: Maybe<DateTime>;
  comments: IssueCommentConnection;
  createdAt: DateTime;
  createdViaEmail: Boolean;
  databaseId?: Maybe<number>;
  editor?: Maybe<Actor>;
  fullDatabaseId?: Maybe<BigInt>;
  hovercard: Hovercard;
  id: string;
  includesCreatedEdit: Boolean;
  isPinned?: Maybe<Boolean>;
  isReadByViewer?: Maybe<Boolean>;
  labels?: Maybe<LabelConnection>;
  lastEditedAt?: Maybe<DateTime>;
  linkedBranches: LinkedBranchConnection;
  locked: Boolean;
  milestone?: Maybe<Milestone>;
  number: number;
  participants: UserConnection;
  projectCards: ProjectCardConnection;
  projectItems: ProjectV2ItemConnection;
  projectV2?: Maybe<ProjectV2>;
  projectsV2: ProjectV2Connection;
  publishedAt?: Maybe<DateTime>;
  reactionGroups?: Maybe<Array<ReactionGroup>>;
  reactions: ReactionConnection;
  repository: Repository;
  resourcePath: URI;
  state: IssueState;
  stateReason?: Maybe<IssueStateReason>;
  timeline: IssueTimelineConnection;
  timelineItems: IssueTimelineItemsConnection;
  title: string;
  titleHTML: string;
  trackedInIssues: IssueConnection;
  trackedIssues: IssueConnection;
  trackedIssuesCount: number;
  updatedAt: DateTime;
  url: URI;
  userContentEdits?: Maybe<UserContentEditConnection>;
  viewerCanClose: Boolean;
  viewerCanDelete: Boolean;
  viewerCanReact: Boolean;
  viewerCanReopen: Boolean;
  viewerCanSubscribe: Boolean;
  viewerCanUpdate: Boolean;
  viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
  viewerDidAuthor: Boolean;
  viewerSubscription?: Maybe<SubscriptionState>;
  viewerThreadSubscriptionFormAction?: Maybe<ThreadSubscriptionFormAction>;
  viewerThreadSubscriptionStatus?: Maybe<ThreadSubscriptionState>;
}
export interface IssueAssigneesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface IssueCommentsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<IssueCommentOrder>;
}
export interface IssueHovercardArgs{
  includeNotificationContexts: Maybe<Boolean>;
}
export interface IssueLabelsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<LabelOrder>;
}
export interface IssueLinkedBranchesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface IssueParticipantsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface IssueProjectCardsArgs{
  after: Maybe<string>;
  archivedStates: Maybe<Array<Maybe<ProjectCardArchivedState>>>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface IssueProjectItemsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  includeArchived: Maybe<Boolean>;
  last: Maybe<number>;
}
export interface IssueProjectV2Args{
  number: number;
}
export interface IssueProjectsV2Args{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ProjectV2Order>;
  query: Maybe<string>;
}
export interface IssueReactionsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  content: Maybe<ReactionContent>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ReactionOrder>;
}
export interface IssueTimelineArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  since: Maybe<DateTime>;
}
export interface IssueTimelineItemsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  itemTypes: Maybe<Array<IssueTimelineItemsItemType>>;
  last: Maybe<number>;
  since: Maybe<DateTime>;
  skip: Maybe<number>;
}
export interface IssueTrackedInIssuesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface IssueTrackedIssuesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface IssueTrackedIssuesCountArgs{
  states: Maybe<Array<Maybe<TrackedIssueStates>>>;
}
export interface IssueUserContentEditsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export enum IssueClosedStateReason {
  COMPLETED,
  NOT_PLANNED,
}
export type IssueComment = Comment & Deletable & Minimizable & Node & Reactable & RepositoryNode & Updatable & UpdatableComment &  {
  author?: Maybe<Actor>;
  authorAssociation: CommentAuthorAssociation;
  body: string;
  bodyHTML: HTML;
  bodyText: string;
  createdAt: DateTime;
  createdViaEmail: Boolean;
  databaseId?: Maybe<number>;
  editor?: Maybe<Actor>;
  fullDatabaseId?: Maybe<BigInt>;
  id: string;
  includesCreatedEdit: Boolean;
  isMinimized: Boolean;
  issue: Issue;
  lastEditedAt?: Maybe<DateTime>;
  minimizedReason?: Maybe<string>;
  publishedAt?: Maybe<DateTime>;
  pullRequest?: Maybe<PullRequest>;
  reactionGroups?: Maybe<Array<ReactionGroup>>;
  reactions: ReactionConnection;
  repository: Repository;
  resourcePath: URI;
  updatedAt: DateTime;
  url: URI;
  userContentEdits?: Maybe<UserContentEditConnection>;
  viewerCanDelete: Boolean;
  viewerCanMinimize: Boolean;
  viewerCanReact: Boolean;
  viewerCanUpdate: Boolean;
  viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
  viewerDidAuthor: Boolean;
}
export interface IssueCommentReactionsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  content: Maybe<ReactionContent>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ReactionOrder>;
}
export interface IssueCommentUserContentEditsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface IssueCommentConnection {
  edges?: Maybe<Array<Maybe<IssueCommentEdge>>>;
  nodes?: Maybe<Array<Maybe<IssueComment>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface IssueCommentEdge {
  cursor: string;
  node?: Maybe<IssueComment>;
}
export type IssueCommentOrder = {
  direction: OrderDirection;
  field: IssueCommentOrderField;
}
export enum IssueCommentOrderField {
  UPDATED_AT,
}
export interface IssueConnection {
  edges?: Maybe<Array<Maybe<IssueEdge>>>;
  nodes?: Maybe<Array<Maybe<Issue>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface IssueContributionsByRepository {
  contributions: CreatedIssueContributionConnection;
  repository: Repository;
}
export interface IssueContributionsByRepositoryContributionsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ContributionOrder>;
}
export interface IssueEdge {
  cursor: string;
  node?: Maybe<Issue>;
}
export type IssueFilters = {
  assignee?: Maybe<string>;
  createdBy?: Maybe<string>;
  labels?: Maybe<Array<string>>;
  mentioned?: Maybe<string>;
  milestone?: Maybe<string>;
  milestoneNumber?: Maybe<string>;
  since?: Maybe<DateTime>;
  states?: Maybe<Array<IssueState>>;
  viewerSubscribed?: Maybe<Boolean>;
}
export type IssueOrPullRequest = Issue | PullRequest;
export type IssueOrder = {
  direction: OrderDirection;
  field: IssueOrderField;
}
export enum IssueOrderField {
  COMMENTS,
  CREATED_AT,
  UPDATED_AT,
}
export enum IssueState {
  CLOSED,
  OPEN,
}
export enum IssueStateReason {
  COMPLETED,
  NOT_PLANNED,
  REOPENED,
}
export interface IssueTemplate {
  about?: Maybe<string>;
  assignees: UserConnection;
  body?: Maybe<string>;
  filename: string;
  labels?: Maybe<LabelConnection>;
  name: string;
  title?: Maybe<string>;
}
export interface IssueTemplateAssigneesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface IssueTemplateLabelsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<LabelOrder>;
}
export interface IssueTimelineConnection {
  edges?: Maybe<Array<Maybe<IssueTimelineItemEdge>>>;
  nodes?: Maybe<Array<Maybe<IssueTimelineItem>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export type IssueTimelineItem = AssignedEvent | ClosedEvent | Commit | CrossReferencedEvent | DemilestonedEvent | IssueComment | LabeledEvent | LockedEvent | MilestonedEvent | ReferencedEvent | RenamedTitleEvent | ReopenedEvent | SubscribedEvent | TransferredEvent | UnassignedEvent | UnlabeledEvent | UnlockedEvent | UnsubscribedEvent | UserBlockedEvent;
export interface IssueTimelineItemEdge {
  cursor: string;
  node?: Maybe<IssueTimelineItem>;
}
export type IssueTimelineItems = AddedToProjectEvent | AssignedEvent | ClosedEvent | CommentDeletedEvent | ConnectedEvent | ConvertedNoteToIssueEvent | ConvertedToDiscussionEvent | CrossReferencedEvent | DemilestonedEvent | DisconnectedEvent | IssueComment | LabeledEvent | LockedEvent | MarkedAsDuplicateEvent | MentionedEvent | MilestonedEvent | MovedColumnsInProjectEvent | PinnedEvent | ReferencedEvent | RemovedFromProjectEvent | RenamedTitleEvent | ReopenedEvent | SubscribedEvent | TransferredEvent | UnassignedEvent | UnlabeledEvent | UnlockedEvent | UnmarkedAsDuplicateEvent | UnpinnedEvent | UnsubscribedEvent | UserBlockedEvent;
export interface IssueTimelineItemsConnection {
  edges?: Maybe<Array<Maybe<IssueTimelineItemsEdge>>>;
  filteredCount: number;
  nodes?: Maybe<Array<Maybe<IssueTimelineItems>>>;
  pageCount: number;
  pageInfo: PageInfo;
  totalCount: number;
  updatedAt: DateTime;
}
export interface IssueTimelineItemsEdge {
  cursor: string;
  node?: Maybe<IssueTimelineItems>;
}
export enum IssueTimelineItemsItemType {
  ADDED_TO_PROJECT_EVENT,
  ASSIGNED_EVENT,
  CLOSED_EVENT,
  COMMENT_DELETED_EVENT,
  CONNECTED_EVENT,
  CONVERTED_NOTE_TO_ISSUE_EVENT,
  CONVERTED_TO_DISCUSSION_EVENT,
  CROSS_REFERENCED_EVENT,
  DEMILESTONED_EVENT,
  DISCONNECTED_EVENT,
  ISSUE_COMMENT,
  LABELED_EVENT,
  LOCKED_EVENT,
  MARKED_AS_DUPLICATE_EVENT,
  MENTIONED_EVENT,
  MILESTONED_EVENT,
  MOVED_COLUMNS_IN_PROJECT_EVENT,
  PINNED_EVENT,
  REFERENCED_EVENT,
  REMOVED_FROM_PROJECT_EVENT,
  RENAMED_TITLE_EVENT,
  REOPENED_EVENT,
  SUBSCRIBED_EVENT,
  TRANSFERRED_EVENT,
  UNASSIGNED_EVENT,
  UNLABELED_EVENT,
  UNLOCKED_EVENT,
  UNMARKED_AS_DUPLICATE_EVENT,
  UNPINNED_EVENT,
  UNSUBSCRIBED_EVENT,
  USER_BLOCKED_EVENT,
}
export type JoinedGitHubContribution = Contribution &  {
  isRestricted: Boolean;
  occurredAt: DateTime;
  resourcePath: URI;
  url: URI;
  user: User;
}
export type Label = Node &  {
  color: string;
  createdAt?: Maybe<DateTime>;
  description?: Maybe<string>;
  id: string;
  isDefault: Boolean;
  issues: IssueConnection;
  name: string;
  pullRequests: PullRequestConnection;
  repository: Repository;
  resourcePath: URI;
  updatedAt?: Maybe<DateTime>;
  url: URI;
}
export interface LabelIssuesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  filterBy: Maybe<IssueFilters>;
  first: Maybe<number>;
  labels: Maybe<Array<string>>;
  last: Maybe<number>;
  orderBy: Maybe<IssueOrder>;
  states: Maybe<Array<IssueState>>;
}
export interface LabelPullRequestsArgs{
  after: Maybe<string>;
  baseRefName: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  headRefName: Maybe<string>;
  labels: Maybe<Array<string>>;
  last: Maybe<number>;
  orderBy: Maybe<IssueOrder>;
  states: Maybe<Array<PullRequestState>>;
}
export interface LabelConnection {
  edges?: Maybe<Array<Maybe<LabelEdge>>>;
  nodes?: Maybe<Array<Maybe<Label>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface LabelEdge {
  cursor: string;
  node?: Maybe<Label>;
}
export type LabelOrder = {
  direction: OrderDirection;
  field: LabelOrderField;
}
export enum LabelOrderField {
  CREATED_AT,
  NAME,
}
export interface Labelable {
  labels?: Maybe<LabelConnection>;
}
export type LabeledEvent = Node &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  id: string;
  label: Label;
  labelable: Labelable;
}
export interface LabelableLabelsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<LabelOrder>;
}
export type Language = Node &  {
  color?: Maybe<string>;
  id: string;
  name: string;
}
export interface LanguageConnection {
  edges?: Maybe<Array<Maybe<LanguageEdge>>>;
  nodes?: Maybe<Array<Maybe<Language>>>;
  pageInfo: PageInfo;
  totalCount: number;
  totalSize: number;
}
export interface LanguageEdge {
  cursor: string;
  node: Language;
  size: number;
}
export type LanguageOrder = {
  direction: OrderDirection;
  field: LanguageOrderField;
}
export enum LanguageOrderField {
  SIZE,
}
export type License = Node &  {
  body: string;
  conditions: Array<LicenseRule>;
  description?: Maybe<string>;
  featured: Boolean;
  hidden: Boolean;
  id: string;
  implementation?: Maybe<string>;
  key: string;
  limitations: Array<LicenseRule>;
  name: string;
  nickname?: Maybe<string>;
  permissions: Array<LicenseRule>;
  pseudoLicense: Boolean;
  spdxId?: Maybe<string>;
  url?: Maybe<URI>;
}
export interface LicenseRule {
  description: string;
  key: string;
  label: string;
}
export type LinkProjectV2ToRepositoryInput = {
  clientMutationId?: Maybe<string>;
  projectId: string;
  repositoryId: string;
}
export interface LinkProjectV2ToRepositoryPayload {
  clientMutationId?: Maybe<string>;
  repository?: Maybe<Repository>;
}
export type LinkProjectV2ToTeamInput = {
  clientMutationId?: Maybe<string>;
  projectId: string;
  teamId: string;
}
export interface LinkProjectV2ToTeamPayload {
  clientMutationId?: Maybe<string>;
  team?: Maybe<Team>;
}
export type LinkRepositoryToProjectInput = {
  clientMutationId?: Maybe<string>;
  projectId: string;
  repositoryId: string;
}
export interface LinkRepositoryToProjectPayload {
  clientMutationId?: Maybe<string>;
  project?: Maybe<Project>;
  repository?: Maybe<Repository>;
}
export type LinkedBranch = Node &  {
  id: string;
  ref?: Maybe<Ref>;
}
export interface LinkedBranchConnection {
  edges?: Maybe<Array<Maybe<LinkedBranchEdge>>>;
  nodes?: Maybe<Array<Maybe<LinkedBranch>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface LinkedBranchEdge {
  cursor: string;
  node?: Maybe<LinkedBranch>;
}
export type LockLockableInput = {
  clientMutationId?: Maybe<string>;
  lockReason?: Maybe<LockReason>;
  lockableId: string;
}
export interface LockLockablePayload {
  actor?: Maybe<Actor>;
  clientMutationId?: Maybe<string>;
  lockedRecord?: Maybe<Lockable>;
}
export enum LockReason {
  OFF_TOPIC,
  RESOLVED,
  SPAM,
  TOO_HEATED,
}
export interface Lockable {
  activeLockReason?: Maybe<LockReason>;
  locked: Boolean;
}
export type LockedEvent = Node &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  id: string;
  lockReason?: Maybe<LockReason>;
  lockable: Lockable;
}
export type Mannequin = Actor & Node & UniformResourceLocatable &  {
  avatarUrl: URI;
  claimant?: Maybe<User>;
  createdAt: DateTime;
  databaseId?: Maybe<number>;
  email?: Maybe<string>;
  id: string;
  login: string;
  resourcePath: URI;
  updatedAt: DateTime;
  url: URI;
}
export interface MannequinAvatarUrlArgs{
  size: Maybe<number>;
}
export interface MannequinConnection {
  edges?: Maybe<Array<Maybe<MannequinEdge>>>;
  nodes?: Maybe<Array<Maybe<Mannequin>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface MannequinEdge {
  cursor: string;
  node?: Maybe<Mannequin>;
}
export type MannequinOrder = {
  direction: OrderDirection;
  field: MannequinOrderField;
}
export enum MannequinOrderField {
  CREATED_AT,
  LOGIN,
}
export type MarkDiscussionCommentAsAnswerInput = {
  clientMutationId?: Maybe<string>;
  id: string;
}
export interface MarkDiscussionCommentAsAnswerPayload {
  clientMutationId?: Maybe<string>;
  discussion?: Maybe<Discussion>;
}
export type MarkFileAsViewedInput = {
  clientMutationId?: Maybe<string>;
  path: string;
  pullRequestId: string;
}
export interface MarkFileAsViewedPayload {
  clientMutationId?: Maybe<string>;
  pullRequest?: Maybe<PullRequest>;
}
export type MarkProjectV2AsTemplateInput = {
  clientMutationId?: Maybe<string>;
  projectId: string;
}
export interface MarkProjectV2AsTemplatePayload {
  clientMutationId?: Maybe<string>;
  projectV2?: Maybe<ProjectV2>;
}
export type MarkPullRequestReadyForReviewInput = {
  clientMutationId?: Maybe<string>;
  pullRequestId: string;
}
export interface MarkPullRequestReadyForReviewPayload {
  clientMutationId?: Maybe<string>;
  pullRequest?: Maybe<PullRequest>;
}
export type MarkedAsDuplicateEvent = Node &  {
  actor?: Maybe<Actor>;
  canonical?: Maybe<IssueOrPullRequest>;
  createdAt: DateTime;
  duplicate?: Maybe<IssueOrPullRequest>;
  id: string;
  isCrossRepository: Boolean;
}
export type MarketplaceCategory = Node &  {
  description?: Maybe<string>;
  howItWorks?: Maybe<string>;
  id: string;
  name: string;
  primaryListingCount: number;
  resourcePath: URI;
  secondaryListingCount: number;
  slug: string;
  url: URI;
}
export type MarketplaceListing = Node &  {
  app?: Maybe<App>;
  companyUrl?: Maybe<URI>;
  configurationResourcePath: URI;
  configurationUrl: URI;
  documentationUrl?: Maybe<URI>;
  extendedDescription?: Maybe<string>;
  extendedDescriptionHTML: HTML;
  fullDescription: string;
  fullDescriptionHTML: HTML;
  hasPublishedFreeTrialPlans: Boolean;
  hasTermsOfService: Boolean;
  hasVerifiedOwner: Boolean;
  howItWorks?: Maybe<string>;
  howItWorksHTML: HTML;
  id: string;
  installationUrl?: Maybe<URI>;
  installedForViewer: Boolean;
  isArchived: Boolean;
  isDraft: Boolean;
  isPaid: Boolean;
  isPublic: Boolean;
  isRejected: Boolean;
  isUnverified: Boolean;
  isUnverifiedPending: Boolean;
  isVerificationPendingFromDraft: Boolean;
  isVerificationPendingFromUnverified: Boolean;
  isVerified: Boolean;
  logoBackgroundColor: string;
  logoUrl?: Maybe<URI>;
  name: string;
  normalizedShortDescription: string;
  pricingUrl?: Maybe<URI>;
  primaryCategory: MarketplaceCategory;
  privacyPolicyUrl: URI;
  resourcePath: URI;
  screenshotUrls: Array<string>;
  secondaryCategory?: Maybe<MarketplaceCategory>;
  shortDescription: string;
  slug: string;
  statusUrl?: Maybe<URI>;
  supportEmail?: Maybe<string>;
  supportUrl: URI;
  termsOfServiceUrl?: Maybe<URI>;
  url: URI;
  viewerCanAddPlans: Boolean;
  viewerCanApprove: Boolean;
  viewerCanDelist: Boolean;
  viewerCanEdit: Boolean;
  viewerCanEditCategories: Boolean;
  viewerCanEditPlans: Boolean;
  viewerCanRedraft: Boolean;
  viewerCanReject: Boolean;
  viewerCanRequestApproval: Boolean;
  viewerHasPurchased: Boolean;
  viewerHasPurchasedForAllOrganizations: Boolean;
  viewerIsListingAdmin: Boolean;
}
export interface MarketplaceListingLogoUrlArgs{
  size: Maybe<number>;
}
export interface MarketplaceListingConnection {
  edges?: Maybe<Array<Maybe<MarketplaceListingEdge>>>;
  nodes?: Maybe<Array<Maybe<MarketplaceListing>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface MarketplaceListingEdge {
  cursor: string;
  node?: Maybe<MarketplaceListing>;
}
export interface MemberStatusable {
  memberStatuses: UserStatusConnection;
}
export type MembersCanDeleteReposClearAuditEntry = AuditEntry & EnterpriseAuditEntryData & Node & OrganizationAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  enterpriseResourcePath?: Maybe<URI>;
  enterpriseSlug?: Maybe<string>;
  enterpriseUrl?: Maybe<URI>;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export interface MemberStatusableMemberStatusesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<UserStatusOrder>;
}
export type MembersCanDeleteReposDisableAuditEntry = AuditEntry & EnterpriseAuditEntryData & Node & OrganizationAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  enterpriseResourcePath?: Maybe<URI>;
  enterpriseSlug?: Maybe<string>;
  enterpriseUrl?: Maybe<URI>;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type MembersCanDeleteReposEnableAuditEntry = AuditEntry & EnterpriseAuditEntryData & Node & OrganizationAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  enterpriseResourcePath?: Maybe<URI>;
  enterpriseSlug?: Maybe<string>;
  enterpriseUrl?: Maybe<URI>;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type MentionedEvent = Node &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  databaseId?: Maybe<number>;
  id: string;
}
export type MergeBranchInput = {
  authorEmail?: Maybe<string>;
  base: string;
  clientMutationId?: Maybe<string>;
  commitMessage?: Maybe<string>;
  head: string;
  repositoryId: string;
}
export interface MergeBranchPayload {
  clientMutationId?: Maybe<string>;
  mergeCommit?: Maybe<Commit>;
}
export enum MergeCommitMessage {
  BLANK,
  PR_BODY,
  PR_TITLE,
}
export enum MergeCommitTitle {
  MERGE_MESSAGE,
  PR_TITLE,
}
export type MergePullRequestInput = {
  authorEmail?: Maybe<string>;
  clientMutationId?: Maybe<string>;
  commitBody?: Maybe<string>;
  commitHeadline?: Maybe<string>;
  expectedHeadOid?: Maybe<GitObjectID>;
  mergeMethod?: Maybe<PullRequestMergeMethod>;
  pullRequestId: string;
}
export interface MergePullRequestPayload {
  actor?: Maybe<Actor>;
  clientMutationId?: Maybe<string>;
  pullRequest?: Maybe<PullRequest>;
}
export type MergeQueue = Node &  {
  configuration?: Maybe<MergeQueueConfiguration>;
  entries?: Maybe<MergeQueueEntryConnection>;
  id: string;
  nextEntryEstimatedTimeToMerge?: Maybe<number>;
  repository?: Maybe<Repository>;
  resourcePath: URI;
  url: URI;
}
export interface MergeQueueEntriesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface MergeQueueConfiguration {
  checkResponseTimeout?: Maybe<number>;
  maximumEntriesToBuild?: Maybe<number>;
  maximumEntriesToMerge?: Maybe<number>;
  mergeMethod?: Maybe<PullRequestMergeMethod>;
  mergingStrategy?: Maybe<MergeQueueMergingStrategy>;
  minimumEntriesToMerge?: Maybe<number>;
  minimumEntriesToMergeWaitTime?: Maybe<number>;
}
export type MergeQueueEntry = Node &  {
  baseCommit?: Maybe<Commit>;
  enqueuedAt: DateTime;
  enqueuer: Actor;
  estimatedTimeToMerge?: Maybe<number>;
  headCommit?: Maybe<Commit>;
  id: string;
  jump: Boolean;
  mergeQueue?: Maybe<MergeQueue>;
  position: number;
  pullRequest?: Maybe<PullRequest>;
  solo: Boolean;
  state: MergeQueueEntryState;
}
export interface MergeQueueEntryConnection {
  edges?: Maybe<Array<Maybe<MergeQueueEntryEdge>>>;
  nodes?: Maybe<Array<Maybe<MergeQueueEntry>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface MergeQueueEntryEdge {
  cursor: string;
  node?: Maybe<MergeQueueEntry>;
}
export enum MergeQueueEntryState {
  AWAITING_CHECKS,
  LOCKED,
  MERGEABLE,
  QUEUED,
  UNMERGEABLE,
}
export enum MergeQueueMergingStrategy {
  ALLGREEN,
  HEADGREEN,
}
export enum MergeStateStatus {
  BEHIND,
  BLOCKED,
  CLEAN,
  DIRTY,
  DRAFT,
  HAS_HOOKS,
  UNKNOWN,
  UNSTABLE,
}
export enum MergeableState {
  CONFLICTING,
  MERGEABLE,
  UNKNOWN,
}
export type MergedEvent = Node & UniformResourceLocatable &  {
  actor?: Maybe<Actor>;
  commit?: Maybe<Commit>;
  createdAt: DateTime;
  id: string;
  mergeRef?: Maybe<Ref>;
  mergeRefName: string;
  pullRequest: PullRequest;
  resourcePath: URI;
  url: URI;
}
export interface Migration {
  continueOnError: Boolean;
  createdAt: DateTime;
  databaseId?: Maybe<string>;
  failureReason?: Maybe<string>;
  id: string;
  migrationLogUrl?: Maybe<URI>;
  migrationSource: MigrationSource;
  repositoryName: string;
  sourceUrl: URI;
  state: MigrationState;
  warningsCount: number;
}
export type MigrationSource = Node &  {
  id: string;
  name: string;
  type: MigrationSourceType;
  url: URI;
}
export enum MigrationSourceType {
  AZURE_DEVOPS,
  BITBUCKET_SERVER,
  GITHUB_ARCHIVE,
}
export enum MigrationState {
  FAILED,
  FAILED_VALIDATION,
  IN_PROGRESS,
  NOT_STARTED,
  PENDING_VALIDATION,
  QUEUED,
  SUCCEEDED,
}
export type Milestone = Closable & Node & UniformResourceLocatable &  {
  closed: Boolean;
  closedAt?: Maybe<DateTime>;
  createdAt: DateTime;
  creator?: Maybe<Actor>;
  description?: Maybe<string>;
  dueOn?: Maybe<DateTime>;
  id: string;
  issues: IssueConnection;
  number: number;
  progressPercentage: number;
  pullRequests: PullRequestConnection;
  repository: Repository;
  resourcePath: URI;
  state: MilestoneState;
  title: string;
  updatedAt: DateTime;
  url: URI;
  viewerCanClose: Boolean;
  viewerCanReopen: Boolean;
}
export interface MilestoneIssuesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  filterBy: Maybe<IssueFilters>;
  first: Maybe<number>;
  labels: Maybe<Array<string>>;
  last: Maybe<number>;
  orderBy: Maybe<IssueOrder>;
  states: Maybe<Array<IssueState>>;
}
export interface MilestonePullRequestsArgs{
  after: Maybe<string>;
  baseRefName: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  headRefName: Maybe<string>;
  labels: Maybe<Array<string>>;
  last: Maybe<number>;
  orderBy: Maybe<IssueOrder>;
  states: Maybe<Array<PullRequestState>>;
}
export interface MilestoneConnection {
  edges?: Maybe<Array<Maybe<MilestoneEdge>>>;
  nodes?: Maybe<Array<Maybe<Milestone>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface MilestoneEdge {
  cursor: string;
  node?: Maybe<Milestone>;
}
export type MilestoneItem = Issue | PullRequest;
export type MilestoneOrder = {
  direction: OrderDirection;
  field: MilestoneOrderField;
}
export enum MilestoneOrderField {
  CREATED_AT,
  DUE_DATE,
  NUMBER,
  UPDATED_AT,
}
export enum MilestoneState {
  CLOSED,
  OPEN,
}
export type MilestonedEvent = Node &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  id: string;
  milestoneTitle: string;
  subject: MilestoneItem;
}
export interface Minimizable {
  isMinimized: Boolean;
  minimizedReason?: Maybe<string>;
  viewerCanMinimize: Boolean;
}
export type MinimizeCommentInput = {
  classifier: ReportedContentClassifiers;
  clientMutationId?: Maybe<string>;
  subjectId: string;
}
export interface MinimizeCommentPayload {
  clientMutationId?: Maybe<string>;
  minimizedComment?: Maybe<Minimizable>;
}
export type MoveProjectCardInput = {
  afterCardId?: Maybe<string>;
  cardId: string;
  clientMutationId?: Maybe<string>;
  columnId: string;
}
export interface MoveProjectCardPayload {
  cardEdge?: Maybe<ProjectCardEdge>;
  clientMutationId?: Maybe<string>;
}
export type MoveProjectColumnInput = {
  afterColumnId?: Maybe<string>;
  clientMutationId?: Maybe<string>;
  columnId: string;
}
export interface MoveProjectColumnPayload {
  clientMutationId?: Maybe<string>;
  columnEdge?: Maybe<ProjectColumnEdge>;
}
export type MovedColumnsInProjectEvent = Node &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  databaseId?: Maybe<number>;
  id: string;
  previousProjectColumnName: string;
  project?: Maybe<Project>;
  projectCard?: Maybe<ProjectCard>;
  projectColumnName: string;
}
export interface Mutation {
  abortQueuedMigrations?: Maybe<AbortQueuedMigrationsPayload>;
  acceptEnterpriseAdministratorInvitation?: Maybe<AcceptEnterpriseAdministratorInvitationPayload>;
  acceptTopicSuggestion?: Maybe<AcceptTopicSuggestionPayload>;
  addAssigneesToAssignable?: Maybe<AddAssigneesToAssignablePayload>;
  addComment?: Maybe<AddCommentPayload>;
  addDiscussionComment?: Maybe<AddDiscussionCommentPayload>;
  addDiscussionPollVote?: Maybe<AddDiscussionPollVotePayload>;
  addEnterpriseOrganizationMember?: Maybe<AddEnterpriseOrganizationMemberPayload>;
  addEnterpriseSupportEntitlement?: Maybe<AddEnterpriseSupportEntitlementPayload>;
  addLabelsToLabelable?: Maybe<AddLabelsToLabelablePayload>;
  addProjectCard?: Maybe<AddProjectCardPayload>;
  addProjectColumn?: Maybe<AddProjectColumnPayload>;
  addProjectV2DraftIssue?: Maybe<AddProjectV2DraftIssuePayload>;
  addProjectV2ItemById?: Maybe<AddProjectV2ItemByIdPayload>;
  addPullRequestReview?: Maybe<AddPullRequestReviewPayload>;
  addPullRequestReviewComment?: Maybe<AddPullRequestReviewCommentPayload>;
  addPullRequestReviewThread?: Maybe<AddPullRequestReviewThreadPayload>;
  addPullRequestReviewThreadReply?: Maybe<AddPullRequestReviewThreadReplyPayload>;
  addReaction?: Maybe<AddReactionPayload>;
  addStar?: Maybe<AddStarPayload>;
  addUpvote?: Maybe<AddUpvotePayload>;
  addVerifiableDomain?: Maybe<AddVerifiableDomainPayload>;
  approveDeployments?: Maybe<ApproveDeploymentsPayload>;
  approveVerifiableDomain?: Maybe<ApproveVerifiableDomainPayload>;
  archiveProjectV2Item?: Maybe<ArchiveProjectV2ItemPayload>;
  archiveRepository?: Maybe<ArchiveRepositoryPayload>;
  cancelEnterpriseAdminInvitation?: Maybe<CancelEnterpriseAdminInvitationPayload>;
  cancelSponsorship?: Maybe<CancelSponsorshipPayload>;
  changeUserStatus?: Maybe<ChangeUserStatusPayload>;
  clearLabelsFromLabelable?: Maybe<ClearLabelsFromLabelablePayload>;
  clearProjectV2ItemFieldValue?: Maybe<ClearProjectV2ItemFieldValuePayload>;
  cloneProject?: Maybe<CloneProjectPayload>;
  cloneTemplateRepository?: Maybe<CloneTemplateRepositoryPayload>;
  closeDiscussion?: Maybe<CloseDiscussionPayload>;
  closeIssue?: Maybe<CloseIssuePayload>;
  closePullRequest?: Maybe<ClosePullRequestPayload>;
  convertProjectCardNoteToIssue?: Maybe<ConvertProjectCardNoteToIssuePayload>;
  convertPullRequestToDraft?: Maybe<ConvertPullRequestToDraftPayload>;
  copyProjectV2?: Maybe<CopyProjectV2Payload>;
  createAttributionInvitation?: Maybe<CreateAttributionInvitationPayload>;
  createBranchProtectionRule?: Maybe<CreateBranchProtectionRulePayload>;
  createCheckRun?: Maybe<CreateCheckRunPayload>;
  createCheckSuite?: Maybe<CreateCheckSuitePayload>;
  createCommitOnBranch?: Maybe<CreateCommitOnBranchPayload>;
  createDeployment?: Maybe<CreateDeploymentPayload>;
  createDeploymentStatus?: Maybe<CreateDeploymentStatusPayload>;
  createDiscussion?: Maybe<CreateDiscussionPayload>;
  createEnterpriseOrganization?: Maybe<CreateEnterpriseOrganizationPayload>;
  createEnvironment?: Maybe<CreateEnvironmentPayload>;
  createIpAllowListEntry?: Maybe<CreateIpAllowListEntryPayload>;
  createIssue?: Maybe<CreateIssuePayload>;
  createLabel?: Maybe<CreateLabelPayload>;
  createLinkedBranch?: Maybe<CreateLinkedBranchPayload>;
  createMigrationSource?: Maybe<CreateMigrationSourcePayload>;
  createProject?: Maybe<CreateProjectPayload>;
  createProjectV2?: Maybe<CreateProjectV2Payload>;
  createProjectV2Field?: Maybe<CreateProjectV2FieldPayload>;
  createPullRequest?: Maybe<CreatePullRequestPayload>;
  createRef?: Maybe<CreateRefPayload>;
  createRepository?: Maybe<CreateRepositoryPayload>;
  createRepositoryRuleset?: Maybe<CreateRepositoryRulesetPayload>;
  createSponsorsListing?: Maybe<CreateSponsorsListingPayload>;
  createSponsorsTier?: Maybe<CreateSponsorsTierPayload>;
  createSponsorship?: Maybe<CreateSponsorshipPayload>;
  createSponsorships?: Maybe<CreateSponsorshipsPayload>;
  createTeamDiscussion?: Maybe<CreateTeamDiscussionPayload>;
  createTeamDiscussionComment?: Maybe<CreateTeamDiscussionCommentPayload>;
  declineTopicSuggestion?: Maybe<DeclineTopicSuggestionPayload>;
  deleteBranchProtectionRule?: Maybe<DeleteBranchProtectionRulePayload>;
  deleteDeployment?: Maybe<DeleteDeploymentPayload>;
  deleteDiscussion?: Maybe<DeleteDiscussionPayload>;
  deleteDiscussionComment?: Maybe<DeleteDiscussionCommentPayload>;
  deleteEnvironment?: Maybe<DeleteEnvironmentPayload>;
  deleteIpAllowListEntry?: Maybe<DeleteIpAllowListEntryPayload>;
  deleteIssue?: Maybe<DeleteIssuePayload>;
  deleteIssueComment?: Maybe<DeleteIssueCommentPayload>;
  deleteLabel?: Maybe<DeleteLabelPayload>;
  deleteLinkedBranch?: Maybe<DeleteLinkedBranchPayload>;
  deletePackageVersion?: Maybe<DeletePackageVersionPayload>;
  deleteProject?: Maybe<DeleteProjectPayload>;
  deleteProjectCard?: Maybe<DeleteProjectCardPayload>;
  deleteProjectColumn?: Maybe<DeleteProjectColumnPayload>;
  deleteProjectV2?: Maybe<DeleteProjectV2Payload>;
  deleteProjectV2Field?: Maybe<DeleteProjectV2FieldPayload>;
  deleteProjectV2Item?: Maybe<DeleteProjectV2ItemPayload>;
  deleteProjectV2Workflow?: Maybe<DeleteProjectV2WorkflowPayload>;
  deletePullRequestReview?: Maybe<DeletePullRequestReviewPayload>;
  deletePullRequestReviewComment?: Maybe<DeletePullRequestReviewCommentPayload>;
  deleteRef?: Maybe<DeleteRefPayload>;
  deleteRepositoryRuleset?: Maybe<DeleteRepositoryRulesetPayload>;
  deleteTeamDiscussion?: Maybe<DeleteTeamDiscussionPayload>;
  deleteTeamDiscussionComment?: Maybe<DeleteTeamDiscussionCommentPayload>;
  deleteVerifiableDomain?: Maybe<DeleteVerifiableDomainPayload>;
  dequeuePullRequest?: Maybe<DequeuePullRequestPayload>;
  disablePullRequestAutoMerge?: Maybe<DisablePullRequestAutoMergePayload>;
  dismissPullRequestReview?: Maybe<DismissPullRequestReviewPayload>;
  dismissRepositoryVulnerabilityAlert?: Maybe<DismissRepositoryVulnerabilityAlertPayload>;
  enablePullRequestAutoMerge?: Maybe<EnablePullRequestAutoMergePayload>;
  enqueuePullRequest?: Maybe<EnqueuePullRequestPayload>;
  followOrganization?: Maybe<FollowOrganizationPayload>;
  followUser?: Maybe<FollowUserPayload>;
  grantEnterpriseOrganizationsMigratorRole?: Maybe<GrantEnterpriseOrganizationsMigratorRolePayload>;
  grantMigratorRole?: Maybe<GrantMigratorRolePayload>;
  importProject?: Maybe<ImportProjectPayload>;
  inviteEnterpriseAdmin?: Maybe<InviteEnterpriseAdminPayload>;
  linkProjectV2ToRepository?: Maybe<LinkProjectV2ToRepositoryPayload>;
  linkProjectV2ToTeam?: Maybe<LinkProjectV2ToTeamPayload>;
  linkRepositoryToProject?: Maybe<LinkRepositoryToProjectPayload>;
  lockLockable?: Maybe<LockLockablePayload>;
  markDiscussionCommentAsAnswer?: Maybe<MarkDiscussionCommentAsAnswerPayload>;
  markFileAsViewed?: Maybe<MarkFileAsViewedPayload>;
  markProjectV2AsTemplate?: Maybe<MarkProjectV2AsTemplatePayload>;
  markPullRequestReadyForReview?: Maybe<MarkPullRequestReadyForReviewPayload>;
  mergeBranch?: Maybe<MergeBranchPayload>;
  mergePullRequest?: Maybe<MergePullRequestPayload>;
  minimizeComment?: Maybe<MinimizeCommentPayload>;
  moveProjectCard?: Maybe<MoveProjectCardPayload>;
  moveProjectColumn?: Maybe<MoveProjectColumnPayload>;
  pinIssue?: Maybe<PinIssuePayload>;
  publishSponsorsTier?: Maybe<PublishSponsorsTierPayload>;
  regenerateEnterpriseIdentityProviderRecoveryCodes?: Maybe<RegenerateEnterpriseIdentityProviderRecoveryCodesPayload>;
  regenerateVerifiableDomainToken?: Maybe<RegenerateVerifiableDomainTokenPayload>;
  rejectDeployments?: Maybe<RejectDeploymentsPayload>;
  removeAssigneesFromAssignable?: Maybe<RemoveAssigneesFromAssignablePayload>;
  removeEnterpriseAdmin?: Maybe<RemoveEnterpriseAdminPayload>;
  removeEnterpriseIdentityProvider?: Maybe<RemoveEnterpriseIdentityProviderPayload>;
  removeEnterpriseMember?: Maybe<RemoveEnterpriseMemberPayload>;
  removeEnterpriseOrganization?: Maybe<RemoveEnterpriseOrganizationPayload>;
  removeEnterpriseSupportEntitlement?: Maybe<RemoveEnterpriseSupportEntitlementPayload>;
  removeLabelsFromLabelable?: Maybe<RemoveLabelsFromLabelablePayload>;
  removeOutsideCollaborator?: Maybe<RemoveOutsideCollaboratorPayload>;
  removeReaction?: Maybe<RemoveReactionPayload>;
  removeStar?: Maybe<RemoveStarPayload>;
  removeUpvote?: Maybe<RemoveUpvotePayload>;
  reopenDiscussion?: Maybe<ReopenDiscussionPayload>;
  reopenIssue?: Maybe<ReopenIssuePayload>;
  reopenPullRequest?: Maybe<ReopenPullRequestPayload>;
  requestReviews?: Maybe<RequestReviewsPayload>;
  rerequestCheckSuite?: Maybe<RerequestCheckSuitePayload>;
  resolveReviewThread?: Maybe<ResolveReviewThreadPayload>;
  retireSponsorsTier?: Maybe<RetireSponsorsTierPayload>;
  revertPullRequest?: Maybe<RevertPullRequestPayload>;
  revokeEnterpriseOrganizationsMigratorRole?: Maybe<RevokeEnterpriseOrganizationsMigratorRolePayload>;
  revokeMigratorRole?: Maybe<RevokeMigratorRolePayload>;
  setEnterpriseIdentityProvider?: Maybe<SetEnterpriseIdentityProviderPayload>;
  setOrganizationInteractionLimit?: Maybe<SetOrganizationInteractionLimitPayload>;
  setRepositoryInteractionLimit?: Maybe<SetRepositoryInteractionLimitPayload>;
  setUserInteractionLimit?: Maybe<SetUserInteractionLimitPayload>;
  startOrganizationMigration?: Maybe<StartOrganizationMigrationPayload>;
  startRepositoryMigration?: Maybe<StartRepositoryMigrationPayload>;
  submitPullRequestReview?: Maybe<SubmitPullRequestReviewPayload>;
  transferEnterpriseOrganization?: Maybe<TransferEnterpriseOrganizationPayload>;
  transferIssue?: Maybe<TransferIssuePayload>;
  unarchiveProjectV2Item?: Maybe<UnarchiveProjectV2ItemPayload>;
  unarchiveRepository?: Maybe<UnarchiveRepositoryPayload>;
  unfollowOrganization?: Maybe<UnfollowOrganizationPayload>;
  unfollowUser?: Maybe<UnfollowUserPayload>;
  unlinkProjectV2FromRepository?: Maybe<UnlinkProjectV2FromRepositoryPayload>;
  unlinkProjectV2FromTeam?: Maybe<UnlinkProjectV2FromTeamPayload>;
  unlinkRepositoryFromProject?: Maybe<UnlinkRepositoryFromProjectPayload>;
  unlockLockable?: Maybe<UnlockLockablePayload>;
  unmarkDiscussionCommentAsAnswer?: Maybe<UnmarkDiscussionCommentAsAnswerPayload>;
  unmarkFileAsViewed?: Maybe<UnmarkFileAsViewedPayload>;
  unmarkIssueAsDuplicate?: Maybe<UnmarkIssueAsDuplicatePayload>;
  unmarkProjectV2AsTemplate?: Maybe<UnmarkProjectV2AsTemplatePayload>;
  unminimizeComment?: Maybe<UnminimizeCommentPayload>;
  unpinIssue?: Maybe<UnpinIssuePayload>;
  unresolveReviewThread?: Maybe<UnresolveReviewThreadPayload>;
  updateBranchProtectionRule?: Maybe<UpdateBranchProtectionRulePayload>;
  updateCheckRun?: Maybe<UpdateCheckRunPayload>;
  updateCheckSuitePreferences?: Maybe<UpdateCheckSuitePreferencesPayload>;
  updateDiscussion?: Maybe<UpdateDiscussionPayload>;
  updateDiscussionComment?: Maybe<UpdateDiscussionCommentPayload>;
  updateEnterpriseAdministratorRole?: Maybe<UpdateEnterpriseAdministratorRolePayload>;
  updateEnterpriseAllowPrivateRepositoryForkingSetting?: Maybe<UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload>;
  updateEnterpriseDefaultRepositoryPermissionSetting?: Maybe<UpdateEnterpriseDefaultRepositoryPermissionSettingPayload>;
  updateEnterpriseMembersCanChangeRepositoryVisibilitySetting?: Maybe<UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload>;
  updateEnterpriseMembersCanCreateRepositoriesSetting?: Maybe<UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload>;
  updateEnterpriseMembersCanDeleteIssuesSetting?: Maybe<UpdateEnterpriseMembersCanDeleteIssuesSettingPayload>;
  updateEnterpriseMembersCanDeleteRepositoriesSetting?: Maybe<UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload>;
  updateEnterpriseMembersCanInviteCollaboratorsSetting?: Maybe<UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload>;
  updateEnterpriseMembersCanMakePurchasesSetting?: Maybe<UpdateEnterpriseMembersCanMakePurchasesSettingPayload>;
  updateEnterpriseMembersCanUpdateProtectedBranchesSetting?: Maybe<UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload>;
  updateEnterpriseMembersCanViewDependencyInsightsSetting?: Maybe<UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload>;
  updateEnterpriseOrganizationProjectsSetting?: Maybe<UpdateEnterpriseOrganizationProjectsSettingPayload>;
  updateEnterpriseOwnerOrganizationRole?: Maybe<UpdateEnterpriseOwnerOrganizationRolePayload>;
  updateEnterpriseProfile?: Maybe<UpdateEnterpriseProfilePayload>;
  updateEnterpriseRepositoryProjectsSetting?: Maybe<UpdateEnterpriseRepositoryProjectsSettingPayload>;
  updateEnterpriseTeamDiscussionsSetting?: Maybe<UpdateEnterpriseTeamDiscussionsSettingPayload>;
  updateEnterpriseTwoFactorAuthenticationRequiredSetting?: Maybe<UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload>;
  updateEnvironment?: Maybe<UpdateEnvironmentPayload>;
  updateIpAllowListEnabledSetting?: Maybe<UpdateIpAllowListEnabledSettingPayload>;
  updateIpAllowListEntry?: Maybe<UpdateIpAllowListEntryPayload>;
  updateIpAllowListForInstalledAppsEnabledSetting?: Maybe<UpdateIpAllowListForInstalledAppsEnabledSettingPayload>;
  updateIssue?: Maybe<UpdateIssuePayload>;
  updateIssueComment?: Maybe<UpdateIssueCommentPayload>;
  updateLabel?: Maybe<UpdateLabelPayload>;
  updateNotificationRestrictionSetting?: Maybe<UpdateNotificationRestrictionSettingPayload>;
  updateOrganizationAllowPrivateRepositoryForkingSetting?: Maybe<UpdateOrganizationAllowPrivateRepositoryForkingSettingPayload>;
  updateOrganizationWebCommitSignoffSetting?: Maybe<UpdateOrganizationWebCommitSignoffSettingPayload>;
  updateProject?: Maybe<UpdateProjectPayload>;
  updateProjectCard?: Maybe<UpdateProjectCardPayload>;
  updateProjectColumn?: Maybe<UpdateProjectColumnPayload>;
  updateProjectV2?: Maybe<UpdateProjectV2Payload>;
  updateProjectV2Collaborators?: Maybe<UpdateProjectV2CollaboratorsPayload>;
  updateProjectV2DraftIssue?: Maybe<UpdateProjectV2DraftIssuePayload>;
  updateProjectV2ItemFieldValue?: Maybe<UpdateProjectV2ItemFieldValuePayload>;
  updateProjectV2ItemPosition?: Maybe<UpdateProjectV2ItemPositionPayload>;
  updatePullRequest?: Maybe<UpdatePullRequestPayload>;
  updatePullRequestBranch?: Maybe<UpdatePullRequestBranchPayload>;
  updatePullRequestReview?: Maybe<UpdatePullRequestReviewPayload>;
  updatePullRequestReviewComment?: Maybe<UpdatePullRequestReviewCommentPayload>;
  updateRef?: Maybe<UpdateRefPayload>;
  updateRefs?: Maybe<UpdateRefsPayload>;
  updateRepository?: Maybe<UpdateRepositoryPayload>;
  updateRepositoryRuleset?: Maybe<UpdateRepositoryRulesetPayload>;
  updateRepositoryWebCommitSignoffSetting?: Maybe<UpdateRepositoryWebCommitSignoffSettingPayload>;
  updateSponsorshipPreferences?: Maybe<UpdateSponsorshipPreferencesPayload>;
  updateSubscription?: Maybe<UpdateSubscriptionPayload>;
  updateTeamDiscussion?: Maybe<UpdateTeamDiscussionPayload>;
  updateTeamDiscussionComment?: Maybe<UpdateTeamDiscussionCommentPayload>;
  updateTeamReviewAssignment?: Maybe<UpdateTeamReviewAssignmentPayload>;
  updateTeamsRepository?: Maybe<UpdateTeamsRepositoryPayload>;
  updateTopics?: Maybe<UpdateTopicsPayload>;
  verifyVerifiableDomain?: Maybe<VerifyVerifiableDomainPayload>;
}
export interface MutationAbortQueuedMigrationsArgs{
  input: AbortQueuedMigrationsInput;
}
export interface MutationAcceptEnterpriseAdministratorInvitationArgs{
  input: AcceptEnterpriseAdministratorInvitationInput;
}
export interface MutationAcceptTopicSuggestionArgs{
  input: AcceptTopicSuggestionInput;
}
export interface MutationAddAssigneesToAssignableArgs{
  input: AddAssigneesToAssignableInput;
}
export interface MutationAddCommentArgs{
  input: AddCommentInput;
}
export interface MutationAddDiscussionCommentArgs{
  input: AddDiscussionCommentInput;
}
export interface MutationAddDiscussionPollVoteArgs{
  input: AddDiscussionPollVoteInput;
}
export interface MutationAddEnterpriseOrganizationMemberArgs{
  input: AddEnterpriseOrganizationMemberInput;
}
export interface MutationAddEnterpriseSupportEntitlementArgs{
  input: AddEnterpriseSupportEntitlementInput;
}
export interface MutationAddLabelsToLabelableArgs{
  input: AddLabelsToLabelableInput;
}
export interface MutationAddProjectCardArgs{
  input: AddProjectCardInput;
}
export interface MutationAddProjectColumnArgs{
  input: AddProjectColumnInput;
}
export interface MutationAddProjectV2DraftIssueArgs{
  input: AddProjectV2DraftIssueInput;
}
export interface MutationAddProjectV2ItemByIdArgs{
  input: AddProjectV2ItemByIdInput;
}
export interface MutationAddPullRequestReviewArgs{
  input: AddPullRequestReviewInput;
}
export interface MutationAddPullRequestReviewCommentArgs{
  input: AddPullRequestReviewCommentInput;
}
export interface MutationAddPullRequestReviewThreadArgs{
  input: AddPullRequestReviewThreadInput;
}
export interface MutationAddPullRequestReviewThreadReplyArgs{
  input: AddPullRequestReviewThreadReplyInput;
}
export interface MutationAddReactionArgs{
  input: AddReactionInput;
}
export interface MutationAddStarArgs{
  input: AddStarInput;
}
export interface MutationAddUpvoteArgs{
  input: AddUpvoteInput;
}
export interface MutationAddVerifiableDomainArgs{
  input: AddVerifiableDomainInput;
}
export interface MutationApproveDeploymentsArgs{
  input: ApproveDeploymentsInput;
}
export interface MutationApproveVerifiableDomainArgs{
  input: ApproveVerifiableDomainInput;
}
export interface MutationArchiveProjectV2ItemArgs{
  input: ArchiveProjectV2ItemInput;
}
export interface MutationArchiveRepositoryArgs{
  input: ArchiveRepositoryInput;
}
export interface MutationCancelEnterpriseAdminInvitationArgs{
  input: CancelEnterpriseAdminInvitationInput;
}
export interface MutationCancelSponsorshipArgs{
  input: CancelSponsorshipInput;
}
export interface MutationChangeUserStatusArgs{
  input: ChangeUserStatusInput;
}
export interface MutationClearLabelsFromLabelableArgs{
  input: ClearLabelsFromLabelableInput;
}
export interface MutationClearProjectV2ItemFieldValueArgs{
  input: ClearProjectV2ItemFieldValueInput;
}
export interface MutationCloneProjectArgs{
  input: CloneProjectInput;
}
export interface MutationCloneTemplateRepositoryArgs{
  input: CloneTemplateRepositoryInput;
}
export interface MutationCloseDiscussionArgs{
  input: CloseDiscussionInput;
}
export interface MutationCloseIssueArgs{
  input: CloseIssueInput;
}
export interface MutationClosePullRequestArgs{
  input: ClosePullRequestInput;
}
export interface MutationConvertProjectCardNoteToIssueArgs{
  input: ConvertProjectCardNoteToIssueInput;
}
export interface MutationConvertPullRequestToDraftArgs{
  input: ConvertPullRequestToDraftInput;
}
export interface MutationCopyProjectV2Args{
  input: CopyProjectV2Input;
}
export interface MutationCreateAttributionInvitationArgs{
  input: CreateAttributionInvitationInput;
}
export interface MutationCreateBranchProtectionRuleArgs{
  input: CreateBranchProtectionRuleInput;
}
export interface MutationCreateCheckRunArgs{
  input: CreateCheckRunInput;
}
export interface MutationCreateCheckSuiteArgs{
  input: CreateCheckSuiteInput;
}
export interface MutationCreateCommitOnBranchArgs{
  input: CreateCommitOnBranchInput;
}
export interface MutationCreateDeploymentArgs{
  input: CreateDeploymentInput;
}
export interface MutationCreateDeploymentStatusArgs{
  input: CreateDeploymentStatusInput;
}
export interface MutationCreateDiscussionArgs{
  input: CreateDiscussionInput;
}
export interface MutationCreateEnterpriseOrganizationArgs{
  input: CreateEnterpriseOrganizationInput;
}
export interface MutationCreateEnvironmentArgs{
  input: CreateEnvironmentInput;
}
export interface MutationCreateIpAllowListEntryArgs{
  input: CreateIpAllowListEntryInput;
}
export interface MutationCreateIssueArgs{
  input: CreateIssueInput;
}
export interface MutationCreateLabelArgs{
  input: CreateLabelInput;
}
export interface MutationCreateLinkedBranchArgs{
  input: CreateLinkedBranchInput;
}
export interface MutationCreateMigrationSourceArgs{
  input: CreateMigrationSourceInput;
}
export interface MutationCreateProjectArgs{
  input: CreateProjectInput;
}
export interface MutationCreateProjectV2Args{
  input: CreateProjectV2Input;
}
export interface MutationCreateProjectV2FieldArgs{
  input: CreateProjectV2FieldInput;
}
export interface MutationCreatePullRequestArgs{
  input: CreatePullRequestInput;
}
export interface MutationCreateRefArgs{
  input: CreateRefInput;
}
export interface MutationCreateRepositoryArgs{
  input: CreateRepositoryInput;
}
export interface MutationCreateRepositoryRulesetArgs{
  input: CreateRepositoryRulesetInput;
}
export interface MutationCreateSponsorsListingArgs{
  input: CreateSponsorsListingInput;
}
export interface MutationCreateSponsorsTierArgs{
  input: CreateSponsorsTierInput;
}
export interface MutationCreateSponsorshipArgs{
  input: CreateSponsorshipInput;
}
export interface MutationCreateSponsorshipsArgs{
  input: CreateSponsorshipsInput;
}
export interface MutationCreateTeamDiscussionArgs{
  input: CreateTeamDiscussionInput;
}
export interface MutationCreateTeamDiscussionCommentArgs{
  input: CreateTeamDiscussionCommentInput;
}
export interface MutationDeclineTopicSuggestionArgs{
  input: DeclineTopicSuggestionInput;
}
export interface MutationDeleteBranchProtectionRuleArgs{
  input: DeleteBranchProtectionRuleInput;
}
export interface MutationDeleteDeploymentArgs{
  input: DeleteDeploymentInput;
}
export interface MutationDeleteDiscussionArgs{
  input: DeleteDiscussionInput;
}
export interface MutationDeleteDiscussionCommentArgs{
  input: DeleteDiscussionCommentInput;
}
export interface MutationDeleteEnvironmentArgs{
  input: DeleteEnvironmentInput;
}
export interface MutationDeleteIpAllowListEntryArgs{
  input: DeleteIpAllowListEntryInput;
}
export interface MutationDeleteIssueArgs{
  input: DeleteIssueInput;
}
export interface MutationDeleteIssueCommentArgs{
  input: DeleteIssueCommentInput;
}
export interface MutationDeleteLabelArgs{
  input: DeleteLabelInput;
}
export interface MutationDeleteLinkedBranchArgs{
  input: DeleteLinkedBranchInput;
}
export interface MutationDeletePackageVersionArgs{
  input: DeletePackageVersionInput;
}
export interface MutationDeleteProjectArgs{
  input: DeleteProjectInput;
}
export interface MutationDeleteProjectCardArgs{
  input: DeleteProjectCardInput;
}
export interface MutationDeleteProjectColumnArgs{
  input: DeleteProjectColumnInput;
}
export interface MutationDeleteProjectV2Args{
  input: DeleteProjectV2Input;
}
export interface MutationDeleteProjectV2FieldArgs{
  input: DeleteProjectV2FieldInput;
}
export interface MutationDeleteProjectV2ItemArgs{
  input: DeleteProjectV2ItemInput;
}
export interface MutationDeleteProjectV2WorkflowArgs{
  input: DeleteProjectV2WorkflowInput;
}
export interface MutationDeletePullRequestReviewArgs{
  input: DeletePullRequestReviewInput;
}
export interface MutationDeletePullRequestReviewCommentArgs{
  input: DeletePullRequestReviewCommentInput;
}
export interface MutationDeleteRefArgs{
  input: DeleteRefInput;
}
export interface MutationDeleteRepositoryRulesetArgs{
  input: DeleteRepositoryRulesetInput;
}
export interface MutationDeleteTeamDiscussionArgs{
  input: DeleteTeamDiscussionInput;
}
export interface MutationDeleteTeamDiscussionCommentArgs{
  input: DeleteTeamDiscussionCommentInput;
}
export interface MutationDeleteVerifiableDomainArgs{
  input: DeleteVerifiableDomainInput;
}
export interface MutationDequeuePullRequestArgs{
  input: DequeuePullRequestInput;
}
export interface MutationDisablePullRequestAutoMergeArgs{
  input: DisablePullRequestAutoMergeInput;
}
export interface MutationDismissPullRequestReviewArgs{
  input: DismissPullRequestReviewInput;
}
export interface MutationDismissRepositoryVulnerabilityAlertArgs{
  input: DismissRepositoryVulnerabilityAlertInput;
}
export interface MutationEnablePullRequestAutoMergeArgs{
  input: EnablePullRequestAutoMergeInput;
}
export interface MutationEnqueuePullRequestArgs{
  input: EnqueuePullRequestInput;
}
export interface MutationFollowOrganizationArgs{
  input: FollowOrganizationInput;
}
export interface MutationFollowUserArgs{
  input: FollowUserInput;
}
export interface MutationGrantEnterpriseOrganizationsMigratorRoleArgs{
  input: GrantEnterpriseOrganizationsMigratorRoleInput;
}
export interface MutationGrantMigratorRoleArgs{
  input: GrantMigratorRoleInput;
}
export interface MutationImportProjectArgs{
  input: ImportProjectInput;
}
export interface MutationInviteEnterpriseAdminArgs{
  input: InviteEnterpriseAdminInput;
}
export interface MutationLinkProjectV2ToRepositoryArgs{
  input: LinkProjectV2ToRepositoryInput;
}
export interface MutationLinkProjectV2ToTeamArgs{
  input: LinkProjectV2ToTeamInput;
}
export interface MutationLinkRepositoryToProjectArgs{
  input: LinkRepositoryToProjectInput;
}
export interface MutationLockLockableArgs{
  input: LockLockableInput;
}
export interface MutationMarkDiscussionCommentAsAnswerArgs{
  input: MarkDiscussionCommentAsAnswerInput;
}
export interface MutationMarkFileAsViewedArgs{
  input: MarkFileAsViewedInput;
}
export interface MutationMarkProjectV2AsTemplateArgs{
  input: MarkProjectV2AsTemplateInput;
}
export interface MutationMarkPullRequestReadyForReviewArgs{
  input: MarkPullRequestReadyForReviewInput;
}
export interface MutationMergeBranchArgs{
  input: MergeBranchInput;
}
export interface MutationMergePullRequestArgs{
  input: MergePullRequestInput;
}
export interface MutationMinimizeCommentArgs{
  input: MinimizeCommentInput;
}
export interface MutationMoveProjectCardArgs{
  input: MoveProjectCardInput;
}
export interface MutationMoveProjectColumnArgs{
  input: MoveProjectColumnInput;
}
export interface MutationPinIssueArgs{
  input: PinIssueInput;
}
export interface MutationPublishSponsorsTierArgs{
  input: PublishSponsorsTierInput;
}
export interface MutationRegenerateEnterpriseIdentityProviderRecoveryCodesArgs{
  input: RegenerateEnterpriseIdentityProviderRecoveryCodesInput;
}
export interface MutationRegenerateVerifiableDomainTokenArgs{
  input: RegenerateVerifiableDomainTokenInput;
}
export interface MutationRejectDeploymentsArgs{
  input: RejectDeploymentsInput;
}
export interface MutationRemoveAssigneesFromAssignableArgs{
  input: RemoveAssigneesFromAssignableInput;
}
export interface MutationRemoveEnterpriseAdminArgs{
  input: RemoveEnterpriseAdminInput;
}
export interface MutationRemoveEnterpriseIdentityProviderArgs{
  input: RemoveEnterpriseIdentityProviderInput;
}
export interface MutationRemoveEnterpriseMemberArgs{
  input: RemoveEnterpriseMemberInput;
}
export interface MutationRemoveEnterpriseOrganizationArgs{
  input: RemoveEnterpriseOrganizationInput;
}
export interface MutationRemoveEnterpriseSupportEntitlementArgs{
  input: RemoveEnterpriseSupportEntitlementInput;
}
export interface MutationRemoveLabelsFromLabelableArgs{
  input: RemoveLabelsFromLabelableInput;
}
export interface MutationRemoveOutsideCollaboratorArgs{
  input: RemoveOutsideCollaboratorInput;
}
export interface MutationRemoveReactionArgs{
  input: RemoveReactionInput;
}
export interface MutationRemoveStarArgs{
  input: RemoveStarInput;
}
export interface MutationRemoveUpvoteArgs{
  input: RemoveUpvoteInput;
}
export interface MutationReopenDiscussionArgs{
  input: ReopenDiscussionInput;
}
export interface MutationReopenIssueArgs{
  input: ReopenIssueInput;
}
export interface MutationReopenPullRequestArgs{
  input: ReopenPullRequestInput;
}
export interface MutationRequestReviewsArgs{
  input: RequestReviewsInput;
}
export interface MutationRerequestCheckSuiteArgs{
  input: RerequestCheckSuiteInput;
}
export interface MutationResolveReviewThreadArgs{
  input: ResolveReviewThreadInput;
}
export interface MutationRetireSponsorsTierArgs{
  input: RetireSponsorsTierInput;
}
export interface MutationRevertPullRequestArgs{
  input: RevertPullRequestInput;
}
export interface MutationRevokeEnterpriseOrganizationsMigratorRoleArgs{
  input: RevokeEnterpriseOrganizationsMigratorRoleInput;
}
export interface MutationRevokeMigratorRoleArgs{
  input: RevokeMigratorRoleInput;
}
export interface MutationSetEnterpriseIdentityProviderArgs{
  input: SetEnterpriseIdentityProviderInput;
}
export interface MutationSetOrganizationInteractionLimitArgs{
  input: SetOrganizationInteractionLimitInput;
}
export interface MutationSetRepositoryInteractionLimitArgs{
  input: SetRepositoryInteractionLimitInput;
}
export interface MutationSetUserInteractionLimitArgs{
  input: SetUserInteractionLimitInput;
}
export interface MutationStartOrganizationMigrationArgs{
  input: StartOrganizationMigrationInput;
}
export interface MutationStartRepositoryMigrationArgs{
  input: StartRepositoryMigrationInput;
}
export interface MutationSubmitPullRequestReviewArgs{
  input: SubmitPullRequestReviewInput;
}
export interface MutationTransferEnterpriseOrganizationArgs{
  input: TransferEnterpriseOrganizationInput;
}
export interface MutationTransferIssueArgs{
  input: TransferIssueInput;
}
export interface MutationUnarchiveProjectV2ItemArgs{
  input: UnarchiveProjectV2ItemInput;
}
export interface MutationUnarchiveRepositoryArgs{
  input: UnarchiveRepositoryInput;
}
export interface MutationUnfollowOrganizationArgs{
  input: UnfollowOrganizationInput;
}
export interface MutationUnfollowUserArgs{
  input: UnfollowUserInput;
}
export interface MutationUnlinkProjectV2FromRepositoryArgs{
  input: UnlinkProjectV2FromRepositoryInput;
}
export interface MutationUnlinkProjectV2FromTeamArgs{
  input: UnlinkProjectV2FromTeamInput;
}
export interface MutationUnlinkRepositoryFromProjectArgs{
  input: UnlinkRepositoryFromProjectInput;
}
export interface MutationUnlockLockableArgs{
  input: UnlockLockableInput;
}
export interface MutationUnmarkDiscussionCommentAsAnswerArgs{
  input: UnmarkDiscussionCommentAsAnswerInput;
}
export interface MutationUnmarkFileAsViewedArgs{
  input: UnmarkFileAsViewedInput;
}
export interface MutationUnmarkIssueAsDuplicateArgs{
  input: UnmarkIssueAsDuplicateInput;
}
export interface MutationUnmarkProjectV2AsTemplateArgs{
  input: UnmarkProjectV2AsTemplateInput;
}
export interface MutationUnminimizeCommentArgs{
  input: UnminimizeCommentInput;
}
export interface MutationUnpinIssueArgs{
  input: UnpinIssueInput;
}
export interface MutationUnresolveReviewThreadArgs{
  input: UnresolveReviewThreadInput;
}
export interface MutationUpdateBranchProtectionRuleArgs{
  input: UpdateBranchProtectionRuleInput;
}
export interface MutationUpdateCheckRunArgs{
  input: UpdateCheckRunInput;
}
export interface MutationUpdateCheckSuitePreferencesArgs{
  input: UpdateCheckSuitePreferencesInput;
}
export interface MutationUpdateDiscussionArgs{
  input: UpdateDiscussionInput;
}
export interface MutationUpdateDiscussionCommentArgs{
  input: UpdateDiscussionCommentInput;
}
export interface MutationUpdateEnterpriseAdministratorRoleArgs{
  input: UpdateEnterpriseAdministratorRoleInput;
}
export interface MutationUpdateEnterpriseAllowPrivateRepositoryForkingSettingArgs{
  input: UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput;
}
export interface MutationUpdateEnterpriseDefaultRepositoryPermissionSettingArgs{
  input: UpdateEnterpriseDefaultRepositoryPermissionSettingInput;
}
export interface MutationUpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingArgs{
  input: UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput;
}
export interface MutationUpdateEnterpriseMembersCanCreateRepositoriesSettingArgs{
  input: UpdateEnterpriseMembersCanCreateRepositoriesSettingInput;
}
export interface MutationUpdateEnterpriseMembersCanDeleteIssuesSettingArgs{
  input: UpdateEnterpriseMembersCanDeleteIssuesSettingInput;
}
export interface MutationUpdateEnterpriseMembersCanDeleteRepositoriesSettingArgs{
  input: UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput;
}
export interface MutationUpdateEnterpriseMembersCanInviteCollaboratorsSettingArgs{
  input: UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput;
}
export interface MutationUpdateEnterpriseMembersCanMakePurchasesSettingArgs{
  input: UpdateEnterpriseMembersCanMakePurchasesSettingInput;
}
export interface MutationUpdateEnterpriseMembersCanUpdateProtectedBranchesSettingArgs{
  input: UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput;
}
export interface MutationUpdateEnterpriseMembersCanViewDependencyInsightsSettingArgs{
  input: UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput;
}
export interface MutationUpdateEnterpriseOrganizationProjectsSettingArgs{
  input: UpdateEnterpriseOrganizationProjectsSettingInput;
}
export interface MutationUpdateEnterpriseOwnerOrganizationRoleArgs{
  input: UpdateEnterpriseOwnerOrganizationRoleInput;
}
export interface MutationUpdateEnterpriseProfileArgs{
  input: UpdateEnterpriseProfileInput;
}
export interface MutationUpdateEnterpriseRepositoryProjectsSettingArgs{
  input: UpdateEnterpriseRepositoryProjectsSettingInput;
}
export interface MutationUpdateEnterpriseTeamDiscussionsSettingArgs{
  input: UpdateEnterpriseTeamDiscussionsSettingInput;
}
export interface MutationUpdateEnterpriseTwoFactorAuthenticationRequiredSettingArgs{
  input: UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput;
}
export interface MutationUpdateEnvironmentArgs{
  input: UpdateEnvironmentInput;
}
export interface MutationUpdateIpAllowListEnabledSettingArgs{
  input: UpdateIpAllowListEnabledSettingInput;
}
export interface MutationUpdateIpAllowListEntryArgs{
  input: UpdateIpAllowListEntryInput;
}
export interface MutationUpdateIpAllowListForInstalledAppsEnabledSettingArgs{
  input: UpdateIpAllowListForInstalledAppsEnabledSettingInput;
}
export interface MutationUpdateIssueArgs{
  input: UpdateIssueInput;
}
export interface MutationUpdateIssueCommentArgs{
  input: UpdateIssueCommentInput;
}
export interface MutationUpdateLabelArgs{
  input: UpdateLabelInput;
}
export interface MutationUpdateNotificationRestrictionSettingArgs{
  input: UpdateNotificationRestrictionSettingInput;
}
export interface MutationUpdateOrganizationAllowPrivateRepositoryForkingSettingArgs{
  input: UpdateOrganizationAllowPrivateRepositoryForkingSettingInput;
}
export interface MutationUpdateOrganizationWebCommitSignoffSettingArgs{
  input: UpdateOrganizationWebCommitSignoffSettingInput;
}
export interface MutationUpdateProjectArgs{
  input: UpdateProjectInput;
}
export interface MutationUpdateProjectCardArgs{
  input: UpdateProjectCardInput;
}
export interface MutationUpdateProjectColumnArgs{
  input: UpdateProjectColumnInput;
}
export interface MutationUpdateProjectV2Args{
  input: UpdateProjectV2Input;
}
export interface MutationUpdateProjectV2CollaboratorsArgs{
  input: UpdateProjectV2CollaboratorsInput;
}
export interface MutationUpdateProjectV2DraftIssueArgs{
  input: UpdateProjectV2DraftIssueInput;
}
export interface MutationUpdateProjectV2ItemFieldValueArgs{
  input: UpdateProjectV2ItemFieldValueInput;
}
export interface MutationUpdateProjectV2ItemPositionArgs{
  input: UpdateProjectV2ItemPositionInput;
}
export interface MutationUpdatePullRequestArgs{
  input: UpdatePullRequestInput;
}
export interface MutationUpdatePullRequestBranchArgs{
  input: UpdatePullRequestBranchInput;
}
export interface MutationUpdatePullRequestReviewArgs{
  input: UpdatePullRequestReviewInput;
}
export interface MutationUpdatePullRequestReviewCommentArgs{
  input: UpdatePullRequestReviewCommentInput;
}
export interface MutationUpdateRefArgs{
  input: UpdateRefInput;
}
export interface MutationUpdateRefsArgs{
  input: UpdateRefsInput;
}
export interface MutationUpdateRepositoryArgs{
  input: UpdateRepositoryInput;
}
export interface MutationUpdateRepositoryRulesetArgs{
  input: UpdateRepositoryRulesetInput;
}
export interface MutationUpdateRepositoryWebCommitSignoffSettingArgs{
  input: UpdateRepositoryWebCommitSignoffSettingInput;
}
export interface MutationUpdateSponsorshipPreferencesArgs{
  input: UpdateSponsorshipPreferencesInput;
}
export interface MutationUpdateSubscriptionArgs{
  input: UpdateSubscriptionInput;
}
export interface MutationUpdateTeamDiscussionArgs{
  input: UpdateTeamDiscussionInput;
}
export interface MutationUpdateTeamDiscussionCommentArgs{
  input: UpdateTeamDiscussionCommentInput;
}
export interface MutationUpdateTeamReviewAssignmentArgs{
  input: UpdateTeamReviewAssignmentInput;
}
export interface MutationUpdateTeamsRepositoryArgs{
  input: UpdateTeamsRepositoryInput;
}
export interface MutationUpdateTopicsArgs{
  input: UpdateTopicsInput;
}
export interface MutationVerifyVerifiableDomainArgs{
  input: VerifyVerifiableDomainInput;
}
export interface Node {
  id: string;
}
export enum NotificationRestrictionSettingValue {
  DISABLED,
  ENABLED,
}
export type OIDCProvider = Node &  {
  enterprise?: Maybe<Enterprise>;
  externalIdentities: ExternalIdentityConnection;
  id: string;
  providerType: OIDCProviderType;
  tenantId: string;
}
export interface OIDCProviderExternalIdentitiesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  login: Maybe<string>;
  membersOnly: Maybe<Boolean>;
  userName: Maybe<string>;
}
export enum OIDCProviderType {
  AAD,
}
export interface OauthApplicationAuditEntryData {
  oauthApplicationName?: Maybe<string>;
  oauthApplicationResourcePath?: Maybe<URI>;
  oauthApplicationUrl?: Maybe<URI>;
}
export type OauthApplicationCreateAuditEntry = AuditEntry & Node & OauthApplicationAuditEntryData & OrganizationAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  applicationUrl?: Maybe<URI>;
  callbackUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  oauthApplicationName?: Maybe<string>;
  oauthApplicationResourcePath?: Maybe<URI>;
  oauthApplicationUrl?: Maybe<URI>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  rateLimit?: Maybe<number>;
  state?: Maybe<OauthApplicationCreateAuditEntryState>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export enum OauthApplicationCreateAuditEntryState {
  ACTIVE,
  PENDING_DELETION,
  SUSPENDED,
}
export enum OperationType {
  ACCESS,
  AUTHENTICATION,
  CREATE,
  MODIFY,
  REMOVE,
  RESTORE,
  TRANSFER,
}
export enum OrderDirection {
  ASC,
  DESC,
}
export type OrgAddBillingManagerAuditEntry = AuditEntry & Node & OrganizationAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  invitationEmail?: Maybe<string>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type OrgAddMemberAuditEntry = AuditEntry & Node & OrganizationAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  permission?: Maybe<OrgAddMemberAuditEntryPermission>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export enum OrgAddMemberAuditEntryPermission {
  ADMIN,
  READ,
}
export type OrgBlockUserAuditEntry = AuditEntry & Node & OrganizationAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  blockedUser?: Maybe<User>;
  blockedUserName?: Maybe<string>;
  blockedUserResourcePath?: Maybe<URI>;
  blockedUserUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type OrgConfigDisableCollaboratorsOnlyAuditEntry = AuditEntry & Node & OrganizationAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type OrgConfigEnableCollaboratorsOnlyAuditEntry = AuditEntry & Node & OrganizationAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type OrgCreateAuditEntry = AuditEntry & Node & OrganizationAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  billingPlan?: Maybe<OrgCreateAuditEntryBillingPlan>;
  createdAt: PreciseDateTime;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export enum OrgCreateAuditEntryBillingPlan {
  BUSINESS,
  BUSINESS_PLUS,
  FREE,
  TIERED_PER_SEAT,
  UNLIMITED,
}
export type OrgDisableOauthAppRestrictionsAuditEntry = AuditEntry & Node & OrganizationAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type OrgDisableSamlAuditEntry = AuditEntry & Node & OrganizationAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  digestMethodUrl?: Maybe<URI>;
  id: string;
  issuerUrl?: Maybe<URI>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  signatureMethodUrl?: Maybe<URI>;
  singleSignOnUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type OrgDisableTwoFactorRequirementAuditEntry = AuditEntry & Node & OrganizationAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type OrgEnableOauthAppRestrictionsAuditEntry = AuditEntry & Node & OrganizationAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type OrgEnableSamlAuditEntry = AuditEntry & Node & OrganizationAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  digestMethodUrl?: Maybe<URI>;
  id: string;
  issuerUrl?: Maybe<URI>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  signatureMethodUrl?: Maybe<URI>;
  singleSignOnUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type OrgEnableTwoFactorRequirementAuditEntry = AuditEntry & Node & OrganizationAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type OrgEnterpriseOwnerOrder = {
  direction: OrderDirection;
  field: OrgEnterpriseOwnerOrderField;
}
export enum OrgEnterpriseOwnerOrderField {
  LOGIN,
}
export type OrgInviteMemberAuditEntry = AuditEntry & Node & OrganizationAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  email?: Maybe<string>;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationInvitation?: Maybe<OrganizationInvitation>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type OrgInviteToBusinessAuditEntry = AuditEntry & EnterpriseAuditEntryData & Node & OrganizationAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  enterpriseResourcePath?: Maybe<URI>;
  enterpriseSlug?: Maybe<string>;
  enterpriseUrl?: Maybe<URI>;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type OrgOauthAppAccessApprovedAuditEntry = AuditEntry & Node & OauthApplicationAuditEntryData & OrganizationAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  oauthApplicationName?: Maybe<string>;
  oauthApplicationResourcePath?: Maybe<URI>;
  oauthApplicationUrl?: Maybe<URI>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type OrgOauthAppAccessBlockedAuditEntry = AuditEntry & Node & OauthApplicationAuditEntryData & OrganizationAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  oauthApplicationName?: Maybe<string>;
  oauthApplicationResourcePath?: Maybe<URI>;
  oauthApplicationUrl?: Maybe<URI>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type OrgOauthAppAccessDeniedAuditEntry = AuditEntry & Node & OauthApplicationAuditEntryData & OrganizationAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  oauthApplicationName?: Maybe<string>;
  oauthApplicationResourcePath?: Maybe<URI>;
  oauthApplicationUrl?: Maybe<URI>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type OrgOauthAppAccessRequestedAuditEntry = AuditEntry & Node & OauthApplicationAuditEntryData & OrganizationAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  oauthApplicationName?: Maybe<string>;
  oauthApplicationResourcePath?: Maybe<URI>;
  oauthApplicationUrl?: Maybe<URI>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type OrgOauthAppAccessUnblockedAuditEntry = AuditEntry & Node & OauthApplicationAuditEntryData & OrganizationAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  oauthApplicationName?: Maybe<string>;
  oauthApplicationResourcePath?: Maybe<URI>;
  oauthApplicationUrl?: Maybe<URI>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type OrgRemoveBillingManagerAuditEntry = AuditEntry & Node & OrganizationAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  reason?: Maybe<OrgRemoveBillingManagerAuditEntryReason>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export enum OrgRemoveBillingManagerAuditEntryReason {
  SAML_EXTERNAL_IDENTITY_MISSING,
  SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY,
  TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE,
}
export type OrgRemoveMemberAuditEntry = AuditEntry & Node & OrganizationAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  membershipTypes?: Maybe<Array<OrgRemoveMemberAuditEntryMembershipType>>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  reason?: Maybe<OrgRemoveMemberAuditEntryReason>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export enum OrgRemoveMemberAuditEntryMembershipType {
  ADMIN,
  BILLING_MANAGER,
  DIRECT_MEMBER,
  OUTSIDE_COLLABORATOR,
  SUSPENDED,
  UNAFFILIATED,
}
export enum OrgRemoveMemberAuditEntryReason {
  SAML_EXTERNAL_IDENTITY_MISSING,
  SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY,
  TWO_FACTOR_ACCOUNT_RECOVERY,
  TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE,
  USER_ACCOUNT_DELETED,
}
export type OrgRemoveOutsideCollaboratorAuditEntry = AuditEntry & Node & OrganizationAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  membershipTypes?: Maybe<Array<OrgRemoveOutsideCollaboratorAuditEntryMembershipType>>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  reason?: Maybe<OrgRemoveOutsideCollaboratorAuditEntryReason>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export enum OrgRemoveOutsideCollaboratorAuditEntryMembershipType {
  BILLING_MANAGER,
  OUTSIDE_COLLABORATOR,
  UNAFFILIATED,
}
export enum OrgRemoveOutsideCollaboratorAuditEntryReason {
  SAML_EXTERNAL_IDENTITY_MISSING,
  TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE,
}
export type OrgRestoreMemberAuditEntry = AuditEntry & Node & OrganizationAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  restoredCustomEmailRoutingsCount?: Maybe<number>;
  restoredIssueAssignmentsCount?: Maybe<number>;
  restoredMemberships?: Maybe<Array<OrgRestoreMemberAuditEntryMembership>>;
  restoredMembershipsCount?: Maybe<number>;
  restoredRepositoriesCount?: Maybe<number>;
  restoredRepositoryStarsCount?: Maybe<number>;
  restoredRepositoryWatchesCount?: Maybe<number>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type OrgRestoreMemberAuditEntryMembership = OrgRestoreMemberMembershipOrganizationAuditEntryData | OrgRestoreMemberMembershipRepositoryAuditEntryData | OrgRestoreMemberMembershipTeamAuditEntryData;
export type OrgRestoreMemberMembershipOrganizationAuditEntryData = OrganizationAuditEntryData &  {
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
}
export type OrgRestoreMemberMembershipRepositoryAuditEntryData = RepositoryAuditEntryData &  {
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<string>;
  repositoryResourcePath?: Maybe<URI>;
  repositoryUrl?: Maybe<URI>;
}
export type OrgRestoreMemberMembershipTeamAuditEntryData = TeamAuditEntryData &  {
  team?: Maybe<Team>;
  teamName?: Maybe<string>;
  teamResourcePath?: Maybe<URI>;
  teamUrl?: Maybe<URI>;
}
export type OrgUnblockUserAuditEntry = AuditEntry & Node & OrganizationAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  blockedUser?: Maybe<User>;
  blockedUserName?: Maybe<string>;
  blockedUserResourcePath?: Maybe<URI>;
  blockedUserUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type OrgUpdateDefaultRepositoryPermissionAuditEntry = AuditEntry & Node & OrganizationAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  permission?: Maybe<OrgUpdateDefaultRepositoryPermissionAuditEntryPermission>;
  permissionWas?: Maybe<OrgUpdateDefaultRepositoryPermissionAuditEntryPermission>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export enum OrgUpdateDefaultRepositoryPermissionAuditEntryPermission {
  ADMIN,
  NONE,
  READ,
  WRITE,
}
export type OrgUpdateMemberAuditEntry = AuditEntry & Node & OrganizationAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  permission?: Maybe<OrgUpdateMemberAuditEntryPermission>;
  permissionWas?: Maybe<OrgUpdateMemberAuditEntryPermission>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export enum OrgUpdateMemberAuditEntryPermission {
  ADMIN,
  READ,
}
export type OrgUpdateMemberRepositoryCreationPermissionAuditEntry = AuditEntry & Node & OrganizationAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  canCreateRepositories?: Maybe<Boolean>;
  createdAt: PreciseDateTime;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
  visibility?: Maybe<OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility>;
}
export enum OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility {
  ALL,
  INTERNAL,
  NONE,
  PRIVATE,
  PRIVATE_INTERNAL,
  PUBLIC,
  PUBLIC_INTERNAL,
  PUBLIC_PRIVATE,
}
export type OrgUpdateMemberRepositoryInvitationPermissionAuditEntry = AuditEntry & Node & OrganizationAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  canInviteOutsideCollaboratorsToRepositories?: Maybe<Boolean>;
  createdAt: PreciseDateTime;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type Organization = Actor & AnnouncementBanner & MemberStatusable & Node & PackageOwner & ProfileOwner & ProjectOwner & ProjectV2Owner & ProjectV2Recent & RepositoryDiscussionAuthor & RepositoryDiscussionCommentAuthor & RepositoryOwner & Sponsorable & UniformResourceLocatable &  {
  announcement?: Maybe<string>;
  announcementExpiresAt?: Maybe<DateTime>;
  announcementUserDismissible?: Maybe<Boolean>;
  anyPinnableItems: Boolean;
  auditLog: OrganizationAuditEntryConnection;
  avatarUrl: URI;
  createdAt: DateTime;
  databaseId?: Maybe<number>;
  description?: Maybe<string>;
  descriptionHTML?: Maybe<string>;
  domains?: Maybe<VerifiableDomainConnection>;
  email?: Maybe<string>;
  enterpriseOwners: OrganizationEnterpriseOwnerConnection;
  estimatedNextSponsorsPayoutInCents: number;
  hasSponsorsListing: Boolean;
  id: string;
  interactionAbility?: Maybe<RepositoryInteractionAbility>;
  ipAllowListEnabledSetting: IpAllowListEnabledSettingValue;
  ipAllowListEntries: IpAllowListEntryConnection;
  ipAllowListForInstalledAppsEnabledSetting: IpAllowListForInstalledAppsEnabledSettingValue;
  isSponsoredBy: Boolean;
  isSponsoringViewer: Boolean;
  isVerified: Boolean;
  itemShowcase: ProfileItemShowcase;
  location?: Maybe<string>;
  login: string;
  mannequins: MannequinConnection;
  memberStatuses: UserStatusConnection;
  membersCanForkPrivateRepositories: Boolean;
  membersWithRole: OrganizationMemberConnection;
  monthlyEstimatedSponsorsIncomeInCents: number;
  name?: Maybe<string>;
  newTeamResourcePath: URI;
  newTeamUrl: URI;
  notificationDeliveryRestrictionEnabledSetting: NotificationRestrictionSettingValue;
  organizationBillingEmail?: Maybe<string>;
  packages: PackageConnection;
  pendingMembers: UserConnection;
  pinnableItems: PinnableItemConnection;
  pinnedItems: PinnableItemConnection;
  pinnedItemsRemaining: number;
  project?: Maybe<Project>;
  projectV2?: Maybe<ProjectV2>;
  projects: ProjectConnection;
  projectsResourcePath: URI;
  projectsUrl: URI;
  projectsV2: ProjectV2Connection;
  recentProjects: ProjectV2Connection;
  repositories: RepositoryConnection;
  repository?: Maybe<Repository>;
  repositoryDiscussionComments: DiscussionCommentConnection;
  repositoryDiscussions: DiscussionConnection;
  repositoryMigrations: RepositoryMigrationConnection;
  requiresTwoFactorAuthentication?: Maybe<Boolean>;
  resourcePath: URI;
  ruleset?: Maybe<RepositoryRuleset>;
  rulesets?: Maybe<RepositoryRulesetConnection>;
  samlIdentityProvider?: Maybe<OrganizationIdentityProvider>;
  sponsoring: SponsorConnection;
  sponsors: SponsorConnection;
  sponsorsActivities: SponsorsActivityConnection;
  sponsorsListing?: Maybe<SponsorsListing>;
  sponsorshipForViewerAsSponsor?: Maybe<Sponsorship>;
  sponsorshipForViewerAsSponsorable?: Maybe<Sponsorship>;
  sponsorshipNewsletters: SponsorshipNewsletterConnection;
  sponsorshipsAsMaintainer: SponsorshipConnection;
  sponsorshipsAsSponsor: SponsorshipConnection;
  team?: Maybe<Team>;
  teams: TeamConnection;
  teamsResourcePath: URI;
  teamsUrl: URI;
  totalSponsorshipAmountAsSponsorInCents?: Maybe<number>;
  twitterUsername?: Maybe<string>;
  updatedAt: DateTime;
  url: URI;
  viewerCanAdminister: Boolean;
  viewerCanChangePinnedItems: Boolean;
  viewerCanCreateProjects: Boolean;
  viewerCanCreateRepositories: Boolean;
  viewerCanCreateTeams: Boolean;
  viewerCanSponsor: Boolean;
  viewerIsAMember: Boolean;
  viewerIsFollowing: Boolean;
  viewerIsSponsoring: Boolean;
  webCommitSignoffRequired: Boolean;
  websiteUrl?: Maybe<URI>;
}
export interface OrganizationAnyPinnableItemsArgs{
  type: Maybe<PinnableItemType>;
}
export interface OrganizationAuditLogArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<AuditLogOrder>;
  query: Maybe<string>;
}
export interface OrganizationAvatarUrlArgs{
  size: Maybe<number>;
}
export interface OrganizationDomainsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  isApproved: Maybe<Boolean>;
  isVerified: Maybe<Boolean>;
  last: Maybe<number>;
  orderBy: Maybe<VerifiableDomainOrder>;
}
export interface OrganizationEnterpriseOwnersArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<OrgEnterpriseOwnerOrder>;
  organizationRole: Maybe<RoleInOrganization>;
  query: Maybe<string>;
}
export interface OrganizationIpAllowListEntriesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<IpAllowListEntryOrder>;
}
export interface OrganizationIsSponsoredByArgs{
  accountLogin: string;
}
export interface OrganizationMannequinsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  login: Maybe<string>;
  orderBy: Maybe<MannequinOrder>;
}
export interface OrganizationMemberStatusesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<UserStatusOrder>;
}
export interface OrganizationMembersWithRoleArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface OrganizationPackagesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  names: Maybe<Array<Maybe<string>>>;
  orderBy: Maybe<PackageOrder>;
  packageType: Maybe<PackageType>;
  repositoryId: Maybe<string>;
}
export interface OrganizationPendingMembersArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface OrganizationPinnableItemsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  types: Maybe<Array<PinnableItemType>>;
}
export interface OrganizationPinnedItemsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  types: Maybe<Array<PinnableItemType>>;
}
export interface OrganizationProjectArgs{
  number: number;
}
export interface OrganizationProjectV2Args{
  number: number;
}
export interface OrganizationProjectsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ProjectOrder>;
  search: Maybe<string>;
  states: Maybe<Array<ProjectState>>;
}
export interface OrganizationProjectsV2Args{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ProjectV2Order>;
  query: Maybe<string>;
}
export interface OrganizationRecentProjectsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface OrganizationRepositoriesArgs{
  affiliations: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  hasIssuesEnabled: Maybe<Boolean>;
  isArchived: Maybe<Boolean>;
  isFork: Maybe<Boolean>;
  isLocked: Maybe<Boolean>;
  last: Maybe<number>;
  orderBy: Maybe<RepositoryOrder>;
  ownerAffiliations: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  privacy: Maybe<RepositoryPrivacy>;
}
export interface OrganizationRepositoryArgs{
  followRenames: Maybe<Boolean>;
  name: string;
}
export interface OrganizationRepositoryDiscussionCommentsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  onlyAnswers: Maybe<Boolean>;
  repositoryId: Maybe<string>;
}
export interface OrganizationRepositoryDiscussionsArgs{
  after: Maybe<string>;
  answered: Maybe<Boolean>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<DiscussionOrder>;
  repositoryId: Maybe<string>;
  states: Maybe<Array<DiscussionState>>;
}
export interface OrganizationRepositoryMigrationsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<RepositoryMigrationOrder>;
  repositoryName: Maybe<string>;
  state: Maybe<MigrationState>;
}
export interface OrganizationRulesetArgs{
  databaseId: number;
}
export interface OrganizationRulesetsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  includeParents: Maybe<Boolean>;
  last: Maybe<number>;
}
export interface OrganizationSponsoringArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<SponsorOrder>;
}
export interface OrganizationSponsorsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<SponsorOrder>;
  tierId: Maybe<string>;
}
export interface OrganizationSponsorsActivitiesArgs{
  actions: Maybe<Array<SponsorsActivityAction>>;
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  includeAsSponsor: Maybe<Boolean>;
  includePrivate: Maybe<Boolean>;
  last: Maybe<number>;
  orderBy: Maybe<SponsorsActivityOrder>;
  period: Maybe<SponsorsActivityPeriod>;
  since: Maybe<DateTime>;
  until: Maybe<DateTime>;
}
export interface OrganizationSponsorshipForViewerAsSponsorArgs{
  activeOnly: Maybe<Boolean>;
}
export interface OrganizationSponsorshipForViewerAsSponsorableArgs{
  activeOnly: Maybe<Boolean>;
}
export interface OrganizationSponsorshipNewslettersArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<SponsorshipNewsletterOrder>;
}
export interface OrganizationSponsorshipsAsMaintainerArgs{
  activeOnly: Maybe<Boolean>;
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  includePrivate: Maybe<Boolean>;
  last: Maybe<number>;
  orderBy: Maybe<SponsorshipOrder>;
}
export interface OrganizationSponsorshipsAsSponsorArgs{
  activeOnly: Maybe<Boolean>;
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  maintainerLogins: Maybe<Array<string>>;
  orderBy: Maybe<SponsorshipOrder>;
}
export interface OrganizationTeamArgs{
  slug: string;
}
export interface OrganizationTeamsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  ldapMapped: Maybe<Boolean>;
  notificationSetting: Maybe<TeamNotificationSetting>;
  orderBy: Maybe<TeamOrder>;
  privacy: Maybe<TeamPrivacy>;
  query: Maybe<string>;
  role: Maybe<TeamRole>;
  rootTeamsOnly: Maybe<Boolean>;
  userLogins: Maybe<Array<string>>;
}
export interface OrganizationTotalSponsorshipAmountAsSponsorInCentsArgs{
  since: Maybe<DateTime>;
  sponsorableLogins: Maybe<Array<string>>;
  until: Maybe<DateTime>;
}
export type OrganizationAuditEntry = MembersCanDeleteReposClearAuditEntry | MembersCanDeleteReposDisableAuditEntry | MembersCanDeleteReposEnableAuditEntry | OauthApplicationCreateAuditEntry | OrgAddBillingManagerAuditEntry | OrgAddMemberAuditEntry | OrgBlockUserAuditEntry | OrgConfigDisableCollaboratorsOnlyAuditEntry | OrgConfigEnableCollaboratorsOnlyAuditEntry | OrgCreateAuditEntry | OrgDisableOauthAppRestrictionsAuditEntry | OrgDisableSamlAuditEntry | OrgDisableTwoFactorRequirementAuditEntry | OrgEnableOauthAppRestrictionsAuditEntry | OrgEnableSamlAuditEntry | OrgEnableTwoFactorRequirementAuditEntry | OrgInviteMemberAuditEntry | OrgInviteToBusinessAuditEntry | OrgOauthAppAccessApprovedAuditEntry | OrgOauthAppAccessBlockedAuditEntry | OrgOauthAppAccessDeniedAuditEntry | OrgOauthAppAccessRequestedAuditEntry | OrgOauthAppAccessUnblockedAuditEntry | OrgRemoveBillingManagerAuditEntry | OrgRemoveMemberAuditEntry | OrgRemoveOutsideCollaboratorAuditEntry | OrgRestoreMemberAuditEntry | OrgUnblockUserAuditEntry | OrgUpdateDefaultRepositoryPermissionAuditEntry | OrgUpdateMemberAuditEntry | OrgUpdateMemberRepositoryCreationPermissionAuditEntry | OrgUpdateMemberRepositoryInvitationPermissionAuditEntry | PrivateRepositoryForkingDisableAuditEntry | PrivateRepositoryForkingEnableAuditEntry | RepoAccessAuditEntry | RepoAddMemberAuditEntry | RepoAddTopicAuditEntry | RepoArchivedAuditEntry | RepoChangeMergeSettingAuditEntry | RepoConfigDisableAnonymousGitAccessAuditEntry | RepoConfigDisableCollaboratorsOnlyAuditEntry | RepoConfigDisableContributorsOnlyAuditEntry | RepoConfigDisableSockpuppetDisallowedAuditEntry | RepoConfigEnableAnonymousGitAccessAuditEntry | RepoConfigEnableCollaboratorsOnlyAuditEntry | RepoConfigEnableContributorsOnlyAuditEntry | RepoConfigEnableSockpuppetDisallowedAuditEntry | RepoConfigLockAnonymousGitAccessAuditEntry | RepoConfigUnlockAnonymousGitAccessAuditEntry | RepoCreateAuditEntry | RepoDestroyAuditEntry | RepoRemoveMemberAuditEntry | RepoRemoveTopicAuditEntry | RepositoryVisibilityChangeDisableAuditEntry | RepositoryVisibilityChangeEnableAuditEntry | TeamAddMemberAuditEntry | TeamAddRepositoryAuditEntry | TeamChangeParentTeamAuditEntry | TeamRemoveMemberAuditEntry | TeamRemoveRepositoryAuditEntry;
export interface OrganizationAuditEntryConnection {
  edges?: Maybe<Array<Maybe<OrganizationAuditEntryEdge>>>;
  nodes?: Maybe<Array<Maybe<OrganizationAuditEntry>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface OrganizationAuditEntryData {
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
}
export interface OrganizationAuditEntryEdge {
  cursor: string;
  node?: Maybe<OrganizationAuditEntry>;
}
export interface OrganizationConnection {
  edges?: Maybe<Array<Maybe<OrganizationEdge>>>;
  nodes?: Maybe<Array<Maybe<Organization>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface OrganizationEdge {
  cursor: string;
  node?: Maybe<Organization>;
}
export interface OrganizationEnterpriseOwnerConnection {
  edges?: Maybe<Array<Maybe<OrganizationEnterpriseOwnerEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface OrganizationEnterpriseOwnerEdge {
  cursor: string;
  node?: Maybe<User>;
  organizationRole: RoleInOrganization;
}
export type OrganizationIdentityProvider = Node &  {
  digestMethod?: Maybe<URI>;
  externalIdentities: ExternalIdentityConnection;
  id: string;
  idpCertificate?: Maybe<X509Certificate>;
  issuer?: Maybe<string>;
  organization?: Maybe<Organization>;
  signatureMethod?: Maybe<URI>;
  ssoUrl?: Maybe<URI>;
}
export interface OrganizationIdentityProviderExternalIdentitiesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  login: Maybe<string>;
  membersOnly: Maybe<Boolean>;
  userName: Maybe<string>;
}
export type OrganizationInvitation = Node &  {
  createdAt: DateTime;
  email?: Maybe<string>;
  id: string;
  invitationSource: OrganizationInvitationSource;
  invitationType: OrganizationInvitationType;
  invitee?: Maybe<User>;
  inviter: User;
  organization: Organization;
  role: OrganizationInvitationRole;
}
export interface OrganizationInvitationConnection {
  edges?: Maybe<Array<Maybe<OrganizationInvitationEdge>>>;
  nodes?: Maybe<Array<Maybe<OrganizationInvitation>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface OrganizationInvitationEdge {
  cursor: string;
  node?: Maybe<OrganizationInvitation>;
}
export enum OrganizationInvitationRole {
  ADMIN,
  BILLING_MANAGER,
  DIRECT_MEMBER,
  REINSTATE,
}
export enum OrganizationInvitationSource {
  MEMBER,
  SCIM,
  UNKNOWN,
}
export enum OrganizationInvitationType {
  EMAIL,
  USER,
}
export interface OrganizationMemberConnection {
  edges?: Maybe<Array<Maybe<OrganizationMemberEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface OrganizationMemberEdge {
  cursor: string;
  hasTwoFactorEnabled?: Maybe<Boolean>;
  node?: Maybe<User>;
  role?: Maybe<OrganizationMemberRole>;
}
export enum OrganizationMemberRole {
  ADMIN,
  MEMBER,
}
export enum OrganizationMembersCanCreateRepositoriesSettingValue {
  ALL,
  DISABLED,
  INTERNAL,
  PRIVATE,
}
export type OrganizationMigration = Node &  {
  createdAt: DateTime;
  databaseId?: Maybe<string>;
  failureReason?: Maybe<string>;
  id: string;
  remainingRepositoriesCount?: Maybe<number>;
  sourceOrgName: string;
  sourceOrgUrl: URI;
  state: OrganizationMigrationState;
  targetOrgName: string;
  totalRepositoriesCount?: Maybe<number>;
}
export enum OrganizationMigrationState {
  FAILED,
  FAILED_VALIDATION,
  IN_PROGRESS,
  NOT_STARTED,
  PENDING_VALIDATION,
  POST_REPO_MIGRATION,
  PRE_REPO_MIGRATION,
  QUEUED,
  REPO_MIGRATION,
  SUCCEEDED,
}
export type OrganizationOrUser = Organization | User;
export type OrganizationOrder = {
  direction: OrderDirection;
  field: OrganizationOrderField;
}
export enum OrganizationOrderField {
  CREATED_AT,
  LOGIN,
}
export type OrganizationTeamsHovercardContext = HovercardContext &  {
  message: string;
  octicon: string;
  relevantTeams: TeamConnection;
  teamsResourcePath: URI;
  teamsUrl: URI;
  totalTeamCount: number;
}
export interface OrganizationTeamsHovercardContextRelevantTeamsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export type OrganizationsHovercardContext = HovercardContext &  {
  message: string;
  octicon: string;
  relevantOrganizations: OrganizationConnection;
  totalOrganizationCount: number;
}
export interface OrganizationsHovercardContextRelevantOrganizationsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<OrganizationOrder>;
}
export type Package = Node &  {
  id: string;
  latestVersion?: Maybe<PackageVersion>;
  name: string;
  packageType: PackageType;
  repository?: Maybe<Repository>;
  statistics?: Maybe<PackageStatistics>;
  version?: Maybe<PackageVersion>;
  versions: PackageVersionConnection;
}
export interface PackageVersionArgs{
  version: string;
}
export interface PackageVersionsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<PackageVersionOrder>;
}
export interface PackageConnection {
  edges?: Maybe<Array<Maybe<PackageEdge>>>;
  nodes?: Maybe<Array<Maybe<Package>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface PackageEdge {
  cursor: string;
  node?: Maybe<Package>;
}
export type PackageFile = Node &  {
  id: string;
  md5?: Maybe<string>;
  name: string;
  packageVersion?: Maybe<PackageVersion>;
  sha1?: Maybe<string>;
  sha256?: Maybe<string>;
  size?: Maybe<number>;
  updatedAt: DateTime;
  url?: Maybe<URI>;
}
export interface PackageFileConnection {
  edges?: Maybe<Array<Maybe<PackageFileEdge>>>;
  nodes?: Maybe<Array<Maybe<PackageFile>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface PackageFileEdge {
  cursor: string;
  node?: Maybe<PackageFile>;
}
export type PackageFileOrder = {
  direction?: Maybe<OrderDirection>;
  field?: Maybe<PackageFileOrderField>;
}
export enum PackageFileOrderField {
  CREATED_AT,
}
export type PackageOrder = {
  direction?: Maybe<OrderDirection>;
  field?: Maybe<PackageOrderField>;
}
export enum PackageOrderField {
  CREATED_AT,
}
export interface PackageOwner {
  id: string;
  packages: PackageConnection;
}
export interface PackageStatistics {
  downloadsTotalCount: number;
}
export interface PackageOwnerPackagesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  names: Maybe<Array<Maybe<string>>>;
  orderBy: Maybe<PackageOrder>;
  packageType: Maybe<PackageType>;
  repositoryId: Maybe<string>;
}
export type PackageTag = Node &  {
  id: string;
  name: string;
  version?: Maybe<PackageVersion>;
}
export enum PackageType {
  DEBIAN,
  DOCKER,
  MAVEN,
  NPM,
  NUGET,
  PYPI,
  RUBYGEMS,
}
export type PackageVersion = Node &  {
  files: PackageFileConnection;
  id: string;
  package?: Maybe<Package>;
  platform?: Maybe<string>;
  preRelease: Boolean;
  readme?: Maybe<string>;
  release?: Maybe<Release>;
  statistics?: Maybe<PackageVersionStatistics>;
  summary?: Maybe<string>;
  version: string;
}
export interface PackageVersionFilesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<PackageFileOrder>;
}
export interface PackageVersionConnection {
  edges?: Maybe<Array<Maybe<PackageVersionEdge>>>;
  nodes?: Maybe<Array<Maybe<PackageVersion>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface PackageVersionEdge {
  cursor: string;
  node?: Maybe<PackageVersion>;
}
export type PackageVersionOrder = {
  direction?: Maybe<OrderDirection>;
  field?: Maybe<PackageVersionOrderField>;
}
export enum PackageVersionOrderField {
  CREATED_AT,
}
export interface PackageVersionStatistics {
  downloadsTotalCount: number;
}
export interface PageInfo {
  endCursor?: Maybe<string>;
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: Maybe<string>;
}
export enum PatchStatus {
  ADDED,
  CHANGED,
  COPIED,
  DELETED,
  MODIFIED,
  RENAMED,
}
export type PermissionGranter = Organization | Repository | Team;
export interface PermissionSource {
  organization: Organization;
  permission: DefaultRepositoryPermissionField;
  source: PermissionGranter;
}
export type PinIssueInput = {
  clientMutationId?: Maybe<string>;
  issueId: string;
}
export interface PinIssuePayload {
  clientMutationId?: Maybe<string>;
  issue?: Maybe<Issue>;
}
export type PinnableItem = Gist | Repository;
export interface PinnableItemConnection {
  edges?: Maybe<Array<Maybe<PinnableItemEdge>>>;
  nodes?: Maybe<Array<Maybe<PinnableItem>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface PinnableItemEdge {
  cursor: string;
  node?: Maybe<PinnableItem>;
}
export enum PinnableItemType {
  GIST,
  ISSUE,
  ORGANIZATION,
  PROJECT,
  PULL_REQUEST,
  REPOSITORY,
  TEAM,
  USER,
}
export type PinnedDiscussion = Node & RepositoryNode &  {
  createdAt: DateTime;
  databaseId?: Maybe<number>;
  discussion: Discussion;
  gradientStopColors: Array<string>;
  id: string;
  pattern: PinnedDiscussionPattern;
  pinnedBy: Actor;
  preconfiguredGradient?: Maybe<PinnedDiscussionGradient>;
  repository: Repository;
  updatedAt: DateTime;
}
export interface PinnedDiscussionConnection {
  edges?: Maybe<Array<Maybe<PinnedDiscussionEdge>>>;
  nodes?: Maybe<Array<Maybe<PinnedDiscussion>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface PinnedDiscussionEdge {
  cursor: string;
  node?: Maybe<PinnedDiscussion>;
}
export enum PinnedDiscussionGradient {
  BLUE_MINT,
  BLUE_PURPLE,
  PINK_BLUE,
  PURPLE_CORAL,
  RED_ORANGE,
}
export enum PinnedDiscussionPattern {
  CHEVRON_UP,
  DOT,
  DOT_FILL,
  HEART_FILL,
  PLUS,
  ZAP,
}
export type PinnedEvent = Node &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  id: string;
  issue: Issue;
}
export type PinnedIssue = Node &  {
  databaseId?: Maybe<number>;
  fullDatabaseId?: Maybe<BigInt>;
  id: string;
  issue: Issue;
  pinnedBy: Actor;
  repository: Repository;
}
export interface PinnedIssueConnection {
  edges?: Maybe<Array<Maybe<PinnedIssueEdge>>>;
  nodes?: Maybe<Array<Maybe<PinnedIssue>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface PinnedIssueEdge {
  cursor: string;
  node?: Maybe<PinnedIssue>;
}
export type PrivateRepositoryForkingDisableAuditEntry = AuditEntry & EnterpriseAuditEntryData & Node & OrganizationAuditEntryData & RepositoryAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  enterpriseResourcePath?: Maybe<URI>;
  enterpriseSlug?: Maybe<string>;
  enterpriseUrl?: Maybe<URI>;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<string>;
  repositoryResourcePath?: Maybe<URI>;
  repositoryUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type PrivateRepositoryForkingEnableAuditEntry = AuditEntry & EnterpriseAuditEntryData & Node & OrganizationAuditEntryData & RepositoryAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  enterpriseResourcePath?: Maybe<URI>;
  enterpriseSlug?: Maybe<string>;
  enterpriseUrl?: Maybe<URI>;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<string>;
  repositoryResourcePath?: Maybe<URI>;
  repositoryUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export interface ProfileItemShowcase {
  hasPinnedItems: Boolean;
  items: PinnableItemConnection;
}
export interface ProfileItemShowcaseItemsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface ProfileOwner {
  anyPinnableItems: Boolean;
  email?: Maybe<string>;
  id: string;
  itemShowcase: ProfileItemShowcase;
  location?: Maybe<string>;
  login: string;
  name?: Maybe<string>;
  pinnableItems: PinnableItemConnection;
  pinnedItems: PinnableItemConnection;
  pinnedItemsRemaining: number;
  viewerCanChangePinnedItems: Boolean;
  websiteUrl?: Maybe<URI>;
}
export type Project = Closable & Node & Updatable &  {
  body?: Maybe<string>;
  bodyHTML: HTML;
  closed: Boolean;
  closedAt?: Maybe<DateTime>;
  columns: ProjectColumnConnection;
  createdAt: DateTime;
  creator?: Maybe<Actor>;
  databaseId?: Maybe<number>;
  id: string;
  name: string;
  number: number;
  owner: ProjectOwner;
  pendingCards: ProjectCardConnection;
  progress: ProjectProgress;
  resourcePath: URI;
  state: ProjectState;
  updatedAt: DateTime;
  url: URI;
  viewerCanClose: Boolean;
  viewerCanReopen: Boolean;
  viewerCanUpdate: Boolean;
}
export interface ProfileOwnerAnyPinnableItemsArgs{
  type: Maybe<PinnableItemType>;
}
export interface ProfileOwnerPinnableItemsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  types: Maybe<Array<PinnableItemType>>;
}
export interface ProfileOwnerPinnedItemsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  types: Maybe<Array<PinnableItemType>>;
}
export interface ProjectColumnsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface ProjectPendingCardsArgs{
  after: Maybe<string>;
  archivedStates: Maybe<Array<Maybe<ProjectCardArchivedState>>>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export type ProjectCard = Node &  {
  column?: Maybe<ProjectColumn>;
  content?: Maybe<ProjectCardItem>;
  createdAt: DateTime;
  creator?: Maybe<Actor>;
  databaseId?: Maybe<number>;
  id: string;
  isArchived: Boolean;
  note?: Maybe<string>;
  project: Project;
  resourcePath: URI;
  state?: Maybe<ProjectCardState>;
  updatedAt: DateTime;
  url: URI;
}
export enum ProjectCardArchivedState {
  ARCHIVED,
  NOT_ARCHIVED,
}
export interface ProjectCardConnection {
  edges?: Maybe<Array<Maybe<ProjectCardEdge>>>;
  nodes?: Maybe<Array<Maybe<ProjectCard>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface ProjectCardEdge {
  cursor: string;
  node?: Maybe<ProjectCard>;
}
export type ProjectCardImport = {
  number: number;
  repository: string;
}
export type ProjectCardItem = Issue | PullRequest;
export enum ProjectCardState {
  CONTENT_ONLY,
  NOTE_ONLY,
  REDACTED,
}
export type ProjectColumn = Node &  {
  cards: ProjectCardConnection;
  createdAt: DateTime;
  databaseId?: Maybe<number>;
  id: string;
  name: string;
  project: Project;
  purpose?: Maybe<ProjectColumnPurpose>;
  resourcePath: URI;
  updatedAt: DateTime;
  url: URI;
}
export interface ProjectColumnCardsArgs{
  after: Maybe<string>;
  archivedStates: Maybe<Array<Maybe<ProjectCardArchivedState>>>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface ProjectColumnConnection {
  edges?: Maybe<Array<Maybe<ProjectColumnEdge>>>;
  nodes?: Maybe<Array<Maybe<ProjectColumn>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface ProjectColumnEdge {
  cursor: string;
  node?: Maybe<ProjectColumn>;
}
export type ProjectColumnImport = {
  columnName: string;
  issues?: Maybe<Array<ProjectCardImport>>;
  position: number;
}
export enum ProjectColumnPurpose {
  DONE,
  IN_PROGRESS,
  TODO,
}
export interface ProjectConnection {
  edges?: Maybe<Array<Maybe<ProjectEdge>>>;
  nodes?: Maybe<Array<Maybe<Project>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface ProjectEdge {
  cursor: string;
  node?: Maybe<Project>;
}
export type ProjectOrder = {
  direction: OrderDirection;
  field: ProjectOrderField;
}
export enum ProjectOrderField {
  CREATED_AT,
  NAME,
  UPDATED_AT,
}
export interface ProjectOwner {
  id: string;
  project?: Maybe<Project>;
  projects: ProjectConnection;
  projectsResourcePath: URI;
  projectsUrl: URI;
  viewerCanCreateProjects: Boolean;
}
export interface ProjectProgress {
  doneCount: number;
  donePercentage: number;
  enabled: Boolean;
  inProgressCount: number;
  inProgressPercentage: number;
  todoCount: number;
  todoPercentage: number;
}
export interface ProjectOwnerProjectArgs{
  number: number;
}
export interface ProjectOwnerProjectsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ProjectOrder>;
  search: Maybe<string>;
  states: Maybe<Array<ProjectState>>;
}
export enum ProjectState {
  CLOSED,
  OPEN,
}
export enum ProjectTemplate {
  AUTOMATED_KANBAN_V2,
  AUTOMATED_REVIEWS_KANBAN,
  BASIC_KANBAN,
  BUG_TRIAGE,
}
export type ProjectV2 = Closable & Node & Updatable &  {
  closed: Boolean;
  closedAt?: Maybe<DateTime>;
  createdAt: DateTime;
  creator?: Maybe<Actor>;
  databaseId?: Maybe<number>;
  field?: Maybe<ProjectV2FieldConfiguration>;
  fields: ProjectV2FieldConfigurationConnection;
  id: string;
  items: ProjectV2ItemConnection;
  number: number;
  owner: ProjectV2Owner;
  public: Boolean;
  readme?: Maybe<string>;
  repositories: RepositoryConnection;
  resourcePath: URI;
  shortDescription?: Maybe<string>;
  teams: TeamConnection;
  template: Boolean;
  title: string;
  updatedAt: DateTime;
  url: URI;
  view?: Maybe<ProjectV2View>;
  viewerCanClose: Boolean;
  viewerCanReopen: Boolean;
  viewerCanUpdate: Boolean;
  views: ProjectV2ViewConnection;
  workflow?: Maybe<ProjectV2Workflow>;
  workflows: ProjectV2WorkflowConnection;
}
export interface ProjectV2FieldArgs{
  name: string;
}
export interface ProjectV2FieldsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ProjectV2FieldOrder>;
}
export interface ProjectV2ItemsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ProjectV2ItemOrder>;
}
export interface ProjectV2RepositoriesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<RepositoryOrder>;
}
export interface ProjectV2TeamsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<TeamOrder>;
}
export interface ProjectV2ViewArgs{
  number: number;
}
export interface ProjectV2ViewsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ProjectV2ViewOrder>;
}
export interface ProjectV2WorkflowArgs{
  number: number;
}
export interface ProjectV2WorkflowsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ProjectV2WorkflowOrder>;
}
export type ProjectV2Actor = Team | User;
export interface ProjectV2ActorConnection {
  edges?: Maybe<Array<Maybe<ProjectV2ActorEdge>>>;
  nodes?: Maybe<Array<Maybe<ProjectV2Actor>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface ProjectV2ActorEdge {
  cursor: string;
  node?: Maybe<ProjectV2Actor>;
}
export type ProjectV2Collaborator = {
  role: ProjectV2Roles;
  teamId?: Maybe<string>;
  userId?: Maybe<string>;
}
export interface ProjectV2Connection {
  edges?: Maybe<Array<Maybe<ProjectV2Edge>>>;
  nodes?: Maybe<Array<Maybe<ProjectV2>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export enum ProjectV2CustomFieldType {
  DATE,
  NUMBER,
  SINGLE_SELECT,
  TEXT,
}
export interface ProjectV2Edge {
  cursor: string;
  node?: Maybe<ProjectV2>;
}
export type ProjectV2Field = Node & ProjectV2FieldCommon &  {
  createdAt: DateTime;
  dataType: ProjectV2FieldType;
  databaseId?: Maybe<number>;
  id: string;
  name: string;
  project: ProjectV2;
  updatedAt: DateTime;
}
export interface ProjectV2FieldCommon {
  createdAt: DateTime;
  dataType: ProjectV2FieldType;
  databaseId?: Maybe<number>;
  id: string;
  name: string;
  project: ProjectV2;
  updatedAt: DateTime;
}
export type ProjectV2FieldConfiguration = ProjectV2Field | ProjectV2IterationField | ProjectV2SingleSelectField;
export interface ProjectV2FieldConfigurationConnection {
  edges?: Maybe<Array<Maybe<ProjectV2FieldConfigurationEdge>>>;
  nodes?: Maybe<Array<Maybe<ProjectV2FieldConfiguration>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface ProjectV2FieldConfigurationEdge {
  cursor: string;
  node?: Maybe<ProjectV2FieldConfiguration>;
}
export interface ProjectV2FieldConnection {
  edges?: Maybe<Array<Maybe<ProjectV2FieldEdge>>>;
  nodes?: Maybe<Array<Maybe<ProjectV2Field>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface ProjectV2FieldEdge {
  cursor: string;
  node?: Maybe<ProjectV2Field>;
}
export type ProjectV2FieldOrder = {
  direction: OrderDirection;
  field: ProjectV2FieldOrderField;
}
export enum ProjectV2FieldOrderField {
  CREATED_AT,
  NAME,
  POSITION,
}
export enum ProjectV2FieldType {
  ASSIGNEES,
  DATE,
  ITERATION,
  LABELS,
  LINKED_PULL_REQUESTS,
  MILESTONE,
  NUMBER,
  REPOSITORY,
  REVIEWERS,
  SINGLE_SELECT,
  TEXT,
  TITLE,
  TRACKED_BY,
  TRACKS,
}
export type ProjectV2FieldValue = {
  date?: Maybe<Date>;
  iterationId?: Maybe<string>;
  number?: Maybe<number>;
  singleSelectOptionId?: Maybe<string>;
  text?: Maybe<string>;
}
export type ProjectV2Filters = {
  state?: Maybe<ProjectV2State>;
}
export type ProjectV2Item = Node &  {
  content?: Maybe<ProjectV2ItemContent>;
  createdAt: DateTime;
  creator?: Maybe<Actor>;
  databaseId?: Maybe<number>;
  fieldValueByName?: Maybe<ProjectV2ItemFieldValue>;
  fieldValues: ProjectV2ItemFieldValueConnection;
  id: string;
  isArchived: Boolean;
  project: ProjectV2;
  type: ProjectV2ItemType;
  updatedAt: DateTime;
}
export interface ProjectV2ItemFieldValueByNameArgs{
  name: string;
}
export interface ProjectV2ItemFieldValuesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ProjectV2ItemFieldValueOrder>;
}
export interface ProjectV2ItemConnection {
  edges?: Maybe<Array<Maybe<ProjectV2ItemEdge>>>;
  nodes?: Maybe<Array<Maybe<ProjectV2Item>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export type ProjectV2ItemContent = DraftIssue | Issue | PullRequest;
export interface ProjectV2ItemEdge {
  cursor: string;
  node?: Maybe<ProjectV2Item>;
}
export type ProjectV2ItemFieldDateValue = Node & ProjectV2ItemFieldValueCommon &  {
  createdAt: DateTime;
  creator?: Maybe<Actor>;
  databaseId?: Maybe<number>;
  date?: Maybe<Date>;
  field: ProjectV2FieldConfiguration;
  id: string;
  item: ProjectV2Item;
  updatedAt: DateTime;
}
export type ProjectV2ItemFieldIterationValue = Node & ProjectV2ItemFieldValueCommon &  {
  createdAt: DateTime;
  creator?: Maybe<Actor>;
  databaseId?: Maybe<number>;
  duration: number;
  field: ProjectV2FieldConfiguration;
  id: string;
  item: ProjectV2Item;
  iterationId: string;
  startDate: Date;
  title: string;
  titleHTML: string;
  updatedAt: DateTime;
}
export interface ProjectV2ItemFieldLabelValue {
  field: ProjectV2FieldConfiguration;
  labels?: Maybe<LabelConnection>;
}
export interface ProjectV2ItemFieldLabelValueLabelsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface ProjectV2ItemFieldMilestoneValue {
  field: ProjectV2FieldConfiguration;
  milestone?: Maybe<Milestone>;
}
export type ProjectV2ItemFieldNumberValue = Node & ProjectV2ItemFieldValueCommon &  {
  createdAt: DateTime;
  creator?: Maybe<Actor>;
  databaseId?: Maybe<number>;
  field: ProjectV2FieldConfiguration;
  id: string;
  item: ProjectV2Item;
  number?: Maybe<number>;
  updatedAt: DateTime;
}
export interface ProjectV2ItemFieldPullRequestValue {
  field: ProjectV2FieldConfiguration;
  pullRequests?: Maybe<PullRequestConnection>;
}
export interface ProjectV2ItemFieldPullRequestValuePullRequestsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<PullRequestOrder>;
}
export interface ProjectV2ItemFieldRepositoryValue {
  field: ProjectV2FieldConfiguration;
  repository?: Maybe<Repository>;
}
export interface ProjectV2ItemFieldReviewerValue {
  field: ProjectV2FieldConfiguration;
  reviewers?: Maybe<RequestedReviewerConnection>;
}
export interface ProjectV2ItemFieldReviewerValueReviewersArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export type ProjectV2ItemFieldSingleSelectValue = Node & ProjectV2ItemFieldValueCommon &  {
  color: ProjectV2SingleSelectFieldOptionColor;
  createdAt: DateTime;
  creator?: Maybe<Actor>;
  databaseId?: Maybe<number>;
  description?: Maybe<string>;
  descriptionHTML?: Maybe<string>;
  field: ProjectV2FieldConfiguration;
  id: string;
  item: ProjectV2Item;
  name?: Maybe<string>;
  nameHTML?: Maybe<string>;
  optionId?: Maybe<string>;
  updatedAt: DateTime;
}
export type ProjectV2ItemFieldTextValue = Node & ProjectV2ItemFieldValueCommon &  {
  createdAt: DateTime;
  creator?: Maybe<Actor>;
  databaseId?: Maybe<number>;
  field: ProjectV2FieldConfiguration;
  id: string;
  item: ProjectV2Item;
  text?: Maybe<string>;
  updatedAt: DateTime;
}
export interface ProjectV2ItemFieldUserValue {
  field: ProjectV2FieldConfiguration;
  users?: Maybe<UserConnection>;
}
export interface ProjectV2ItemFieldUserValueUsersArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export type ProjectV2ItemFieldValue = ProjectV2ItemFieldDateValue | ProjectV2ItemFieldIterationValue | ProjectV2ItemFieldLabelValue | ProjectV2ItemFieldMilestoneValue | ProjectV2ItemFieldNumberValue | ProjectV2ItemFieldPullRequestValue | ProjectV2ItemFieldRepositoryValue | ProjectV2ItemFieldReviewerValue | ProjectV2ItemFieldSingleSelectValue | ProjectV2ItemFieldTextValue | ProjectV2ItemFieldUserValue;
export interface ProjectV2ItemFieldValueCommon {
  createdAt: DateTime;
  creator?: Maybe<Actor>;
  databaseId?: Maybe<number>;
  field: ProjectV2FieldConfiguration;
  id: string;
  item: ProjectV2Item;
  updatedAt: DateTime;
}
export interface ProjectV2ItemFieldValueConnection {
  edges?: Maybe<Array<Maybe<ProjectV2ItemFieldValueEdge>>>;
  nodes?: Maybe<Array<Maybe<ProjectV2ItemFieldValue>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface ProjectV2ItemFieldValueEdge {
  cursor: string;
  node?: Maybe<ProjectV2ItemFieldValue>;
}
export type ProjectV2ItemFieldValueOrder = {
  direction: OrderDirection;
  field: ProjectV2ItemFieldValueOrderField;
}
export enum ProjectV2ItemFieldValueOrderField {
  POSITION,
}
export type ProjectV2ItemOrder = {
  direction: OrderDirection;
  field: ProjectV2ItemOrderField;
}
export enum ProjectV2ItemOrderField {
  POSITION,
}
export enum ProjectV2ItemType {
  DRAFT_ISSUE,
  ISSUE,
  PULL_REQUEST,
  REDACTED,
}
export type ProjectV2IterationField = Node & ProjectV2FieldCommon &  {
  configuration: ProjectV2IterationFieldConfiguration;
  createdAt: DateTime;
  dataType: ProjectV2FieldType;
  databaseId?: Maybe<number>;
  id: string;
  name: string;
  project: ProjectV2;
  updatedAt: DateTime;
}
export interface ProjectV2IterationFieldConfiguration {
  completedIterations: Array<ProjectV2IterationFieldIteration>;
  duration: number;
  iterations: Array<ProjectV2IterationFieldIteration>;
  startDay: number;
}
export interface ProjectV2IterationFieldIteration {
  duration: number;
  id: string;
  startDate: Date;
  title: string;
  titleHTML: string;
}
export type ProjectV2Order = {
  direction: OrderDirection;
  field: ProjectV2OrderField;
}
export enum ProjectV2OrderField {
  CREATED_AT,
  NUMBER,
  TITLE,
  UPDATED_AT,
}
export interface ProjectV2Owner {
  id: string;
  projectV2?: Maybe<ProjectV2>;
  projectsV2: ProjectV2Connection;
}
export interface ProjectV2Recent {
  recentProjects: ProjectV2Connection;
}
export enum ProjectV2Roles {
  ADMIN,
  NONE,
  READER,
  WRITER,
}
export type ProjectV2SingleSelectField = Node & ProjectV2FieldCommon &  {
  createdAt: DateTime;
  dataType: ProjectV2FieldType;
  databaseId?: Maybe<number>;
  id: string;
  name: string;
  options: Array<ProjectV2SingleSelectFieldOption>;
  project: ProjectV2;
  updatedAt: DateTime;
}
export interface ProjectV2OwnerProjectV2Args{
  number: number;
}
export interface ProjectV2OwnerProjectsV2Args{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ProjectV2Order>;
  query: Maybe<string>;
}
export interface ProjectV2RecentRecentProjectsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface ProjectV2SingleSelectFieldOptionsArgs{
  names: Maybe<Array<string>>;
}
export interface ProjectV2SingleSelectFieldOption {
  color: ProjectV2SingleSelectFieldOptionColor;
  description: string;
  descriptionHTML: string;
  id: string;
  name: string;
  nameHTML: string;
}
export enum ProjectV2SingleSelectFieldOptionColor {
  BLUE,
  GRAY,
  GREEN,
  ORANGE,
  PINK,
  PURPLE,
  RED,
  YELLOW,
}
export type ProjectV2SingleSelectFieldOptionInput = {
  color: ProjectV2SingleSelectFieldOptionColor;
  description: string;
  name: string;
}
export interface ProjectV2SortBy {
  direction: OrderDirection;
  field: ProjectV2Field;
}
export interface ProjectV2SortByConnection {
  edges?: Maybe<Array<Maybe<ProjectV2SortByEdge>>>;
  nodes?: Maybe<Array<Maybe<ProjectV2SortBy>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface ProjectV2SortByEdge {
  cursor: string;
  node?: Maybe<ProjectV2SortBy>;
}
export interface ProjectV2SortByField {
  direction: OrderDirection;
  field: ProjectV2FieldConfiguration;
}
export interface ProjectV2SortByFieldConnection {
  edges?: Maybe<Array<Maybe<ProjectV2SortByFieldEdge>>>;
  nodes?: Maybe<Array<Maybe<ProjectV2SortByField>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface ProjectV2SortByFieldEdge {
  cursor: string;
  node?: Maybe<ProjectV2SortByField>;
}
export enum ProjectV2State {
  CLOSED,
  OPEN,
}
export type ProjectV2View = Node &  {
  createdAt: DateTime;
  databaseId?: Maybe<number>;
  fields?: Maybe<ProjectV2FieldConfigurationConnection>;
  filter?: Maybe<string>;
  groupBy?: Maybe<ProjectV2FieldConnection>;
  groupByFields?: Maybe<ProjectV2FieldConfigurationConnection>;
  id: string;
  layout: ProjectV2ViewLayout;
  name: string;
  number: number;
  project: ProjectV2;
  sortBy?: Maybe<ProjectV2SortByConnection>;
  sortByFields?: Maybe<ProjectV2SortByFieldConnection>;
  updatedAt: DateTime;
  verticalGroupBy?: Maybe<ProjectV2FieldConnection>;
  verticalGroupByFields?: Maybe<ProjectV2FieldConfigurationConnection>;
  visibleFields?: Maybe<ProjectV2FieldConnection>;
}
export interface ProjectV2ViewFieldsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ProjectV2FieldOrder>;
}
export interface ProjectV2ViewGroupByArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ProjectV2FieldOrder>;
}
export interface ProjectV2ViewGroupByFieldsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ProjectV2FieldOrder>;
}
export interface ProjectV2ViewSortByArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface ProjectV2ViewSortByFieldsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface ProjectV2ViewVerticalGroupByArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ProjectV2FieldOrder>;
}
export interface ProjectV2ViewVerticalGroupByFieldsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ProjectV2FieldOrder>;
}
export interface ProjectV2ViewVisibleFieldsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ProjectV2FieldOrder>;
}
export interface ProjectV2ViewConnection {
  edges?: Maybe<Array<Maybe<ProjectV2ViewEdge>>>;
  nodes?: Maybe<Array<Maybe<ProjectV2View>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface ProjectV2ViewEdge {
  cursor: string;
  node?: Maybe<ProjectV2View>;
}
export enum ProjectV2ViewLayout {
  BOARD_LAYOUT,
  ROADMAP_LAYOUT,
  TABLE_LAYOUT,
}
export type ProjectV2ViewOrder = {
  direction: OrderDirection;
  field: ProjectV2ViewOrderField;
}
export enum ProjectV2ViewOrderField {
  CREATED_AT,
  NAME,
  POSITION,
}
export type ProjectV2Workflow = Node &  {
  createdAt: DateTime;
  databaseId?: Maybe<number>;
  enabled: Boolean;
  id: string;
  name: string;
  number: number;
  project: ProjectV2;
  updatedAt: DateTime;
}
export interface ProjectV2WorkflowConnection {
  edges?: Maybe<Array<Maybe<ProjectV2WorkflowEdge>>>;
  nodes?: Maybe<Array<Maybe<ProjectV2Workflow>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface ProjectV2WorkflowEdge {
  cursor: string;
  node?: Maybe<ProjectV2Workflow>;
}
export type ProjectV2WorkflowOrder = {
  direction: OrderDirection;
  field: ProjectV2WorkflowsOrderField;
}
export enum ProjectV2WorkflowsOrderField {
  CREATED_AT,
  NAME,
  NUMBER,
  UPDATED_AT,
}
export type PublicKey = Node &  {
  accessedAt?: Maybe<DateTime>;
  createdAt?: Maybe<DateTime>;
  fingerprint: string;
  id: string;
  isReadOnly?: Maybe<Boolean>;
  key: string;
  updatedAt?: Maybe<DateTime>;
}
export interface PublicKeyConnection {
  edges?: Maybe<Array<Maybe<PublicKeyEdge>>>;
  nodes?: Maybe<Array<Maybe<PublicKey>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface PublicKeyEdge {
  cursor: string;
  node?: Maybe<PublicKey>;
}
export type PublishSponsorsTierInput = {
  clientMutationId?: Maybe<string>;
  tierId: string;
}
export interface PublishSponsorsTierPayload {
  clientMutationId?: Maybe<string>;
  sponsorsTier?: Maybe<SponsorsTier>;
}
export type PullRequest = Assignable & Closable & Comment & Labelable & Lockable & Node & ProjectV2Owner & Reactable & RepositoryNode & Subscribable & UniformResourceLocatable & Updatable & UpdatableComment &  {
  activeLockReason?: Maybe<LockReason>;
  additions: number;
  assignees: UserConnection;
  author?: Maybe<Actor>;
  authorAssociation: CommentAuthorAssociation;
  autoMergeRequest?: Maybe<AutoMergeRequest>;
  baseRef?: Maybe<Ref>;
  baseRefName: string;
  baseRefOid: GitObjectID;
  baseRepository?: Maybe<Repository>;
  body: string;
  bodyHTML: HTML;
  bodyText: string;
  canBeRebased: Boolean;
  changedFiles: number;
  checksResourcePath: URI;
  checksUrl: URI;
  closed: Boolean;
  closedAt?: Maybe<DateTime>;
  closingIssuesReferences?: Maybe<IssueConnection>;
  comments: IssueCommentConnection;
  commits: PullRequestCommitConnection;
  createdAt: DateTime;
  createdViaEmail: Boolean;
  databaseId?: Maybe<number>;
  deletions: number;
  editor?: Maybe<Actor>;
  files?: Maybe<PullRequestChangedFileConnection>;
  headRef?: Maybe<Ref>;
  headRefName: string;
  headRefOid: GitObjectID;
  headRepository?: Maybe<Repository>;
  headRepositoryOwner?: Maybe<RepositoryOwner>;
  hovercard: Hovercard;
  id: string;
  includesCreatedEdit: Boolean;
  isCrossRepository: Boolean;
  isDraft: Boolean;
  isReadByViewer?: Maybe<Boolean>;
  labels?: Maybe<LabelConnection>;
  lastEditedAt?: Maybe<DateTime>;
  latestOpinionatedReviews?: Maybe<PullRequestReviewConnection>;
  latestReviews?: Maybe<PullRequestReviewConnection>;
  locked: Boolean;
  maintainerCanModify: Boolean;
  mergeCommit?: Maybe<Commit>;
  mergeQueueEntry?: Maybe<MergeQueueEntry>;
  mergeStateStatus: MergeStateStatus;
  mergeable: MergeableState;
  merged: Boolean;
  mergedAt?: Maybe<DateTime>;
  mergedBy?: Maybe<Actor>;
  milestone?: Maybe<Milestone>;
  number: number;
  participants: UserConnection;
  permalink: URI;
  potentialMergeCommit?: Maybe<Commit>;
  projectCards: ProjectCardConnection;
  projectItems: ProjectV2ItemConnection;
  projectV2?: Maybe<ProjectV2>;
  projectsV2: ProjectV2Connection;
  publishedAt?: Maybe<DateTime>;
  reactionGroups?: Maybe<Array<ReactionGroup>>;
  reactions: ReactionConnection;
  repository: Repository;
  resourcePath: URI;
  revertResourcePath: URI;
  revertUrl: URI;
  reviewDecision?: Maybe<PullRequestReviewDecision>;
  reviewRequests?: Maybe<ReviewRequestConnection>;
  reviewThreads: PullRequestReviewThreadConnection;
  reviews?: Maybe<PullRequestReviewConnection>;
  state: PullRequestState;
  suggestedReviewers: Array<SuggestedReviewer>;
  timeline: PullRequestTimelineConnection;
  timelineItems: PullRequestTimelineItemsConnection;
  title: string;
  titleHTML: HTML;
  totalCommentsCount?: Maybe<number>;
  updatedAt: DateTime;
  url: URI;
  userContentEdits?: Maybe<UserContentEditConnection>;
  viewerCanApplySuggestion: Boolean;
  viewerCanClose: Boolean;
  viewerCanDeleteHeadRef: Boolean;
  viewerCanDisableAutoMerge: Boolean;
  viewerCanEditFiles: Boolean;
  viewerCanEnableAutoMerge: Boolean;
  viewerCanMergeAsAdmin: Boolean;
  viewerCanReact: Boolean;
  viewerCanReopen: Boolean;
  viewerCanSubscribe: Boolean;
  viewerCanUpdate: Boolean;
  viewerCanUpdateBranch: Boolean;
  viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
  viewerDidAuthor: Boolean;
  viewerLatestReview?: Maybe<PullRequestReview>;
  viewerLatestReviewRequest?: Maybe<ReviewRequest>;
  viewerMergeBodyText: string;
  viewerMergeHeadlineText: string;
  viewerSubscription?: Maybe<SubscriptionState>;
}
export interface PullRequestAssigneesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface PullRequestClosingIssuesReferencesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<IssueOrder>;
  userLinkedOnly: Maybe<Boolean>;
}
export interface PullRequestCommentsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<IssueCommentOrder>;
}
export interface PullRequestCommitsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface PullRequestFilesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface PullRequestHovercardArgs{
  includeNotificationContexts: Maybe<Boolean>;
}
export interface PullRequestLabelsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<LabelOrder>;
}
export interface PullRequestLatestOpinionatedReviewsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  writersOnly: Maybe<Boolean>;
}
export interface PullRequestLatestReviewsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface PullRequestParticipantsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface PullRequestProjectCardsArgs{
  after: Maybe<string>;
  archivedStates: Maybe<Array<Maybe<ProjectCardArchivedState>>>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface PullRequestProjectItemsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  includeArchived: Maybe<Boolean>;
  last: Maybe<number>;
}
export interface PullRequestProjectV2Args{
  number: number;
}
export interface PullRequestProjectsV2Args{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ProjectV2Order>;
  query: Maybe<string>;
}
export interface PullRequestReactionsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  content: Maybe<ReactionContent>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ReactionOrder>;
}
export interface PullRequestReviewRequestsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface PullRequestReviewThreadsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface PullRequestReviewsArgs{
  after: Maybe<string>;
  author: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  states: Maybe<Array<PullRequestReviewState>>;
}
export interface PullRequestTimelineArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  since: Maybe<DateTime>;
}
export interface PullRequestTimelineItemsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  itemTypes: Maybe<Array<PullRequestTimelineItemsItemType>>;
  last: Maybe<number>;
  since: Maybe<DateTime>;
  skip: Maybe<number>;
}
export interface PullRequestUserContentEditsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface PullRequestViewerMergeBodyTextArgs{
  mergeType: Maybe<PullRequestMergeMethod>;
}
export interface PullRequestViewerMergeHeadlineTextArgs{
  mergeType: Maybe<PullRequestMergeMethod>;
}
export enum PullRequestBranchUpdateMethod {
  MERGE,
  REBASE,
}
export interface PullRequestChangedFile {
  additions: number;
  changeType: PatchStatus;
  deletions: number;
  path: string;
  viewerViewedState: FileViewedState;
}
export interface PullRequestChangedFileConnection {
  edges?: Maybe<Array<Maybe<PullRequestChangedFileEdge>>>;
  nodes?: Maybe<Array<Maybe<PullRequestChangedFile>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface PullRequestChangedFileEdge {
  cursor: string;
  node?: Maybe<PullRequestChangedFile>;
}
export type PullRequestCommit = Node & UniformResourceLocatable &  {
  commit: Commit;
  id: string;
  pullRequest: PullRequest;
  resourcePath: URI;
  url: URI;
}
export type PullRequestCommitCommentThread = Node & RepositoryNode &  {
  comments: CommitCommentConnection;
  commit: Commit;
  id: string;
  path?: Maybe<string>;
  position?: Maybe<number>;
  pullRequest: PullRequest;
  repository: Repository;
}
export interface PullRequestCommitCommentThreadCommentsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface PullRequestCommitConnection {
  edges?: Maybe<Array<Maybe<PullRequestCommitEdge>>>;
  nodes?: Maybe<Array<Maybe<PullRequestCommit>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface PullRequestCommitEdge {
  cursor: string;
  node?: Maybe<PullRequestCommit>;
}
export interface PullRequestConnection {
  edges?: Maybe<Array<Maybe<PullRequestEdge>>>;
  nodes?: Maybe<Array<Maybe<PullRequest>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface PullRequestContributionsByRepository {
  contributions: CreatedPullRequestContributionConnection;
  repository: Repository;
}
export interface PullRequestContributionsByRepositoryContributionsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ContributionOrder>;
}
export interface PullRequestEdge {
  cursor: string;
  node?: Maybe<PullRequest>;
}
export enum PullRequestMergeMethod {
  MERGE,
  REBASE,
  SQUASH,
}
export type PullRequestOrder = {
  direction: OrderDirection;
  field: PullRequestOrderField;
}
export enum PullRequestOrderField {
  CREATED_AT,
  UPDATED_AT,
}
export interface PullRequestParameters {
  dismissStaleReviewsOnPush: Boolean;
  requireCodeOwnerReview: Boolean;
  requireLastPushApproval: Boolean;
  requiredApprovingReviewCount: number;
  requiredReviewThreadResolution: Boolean;
}
export type PullRequestParametersInput = {
  dismissStaleReviewsOnPush: Boolean;
  requireCodeOwnerReview: Boolean;
  requireLastPushApproval: Boolean;
  requiredApprovingReviewCount: number;
  requiredReviewThreadResolution: Boolean;
}
export type PullRequestReview = Comment & Deletable & Node & Reactable & RepositoryNode & Updatable & UpdatableComment &  {
  author?: Maybe<Actor>;
  authorAssociation: CommentAuthorAssociation;
  authorCanPushToRepository: Boolean;
  body: string;
  bodyHTML: HTML;
  bodyText: string;
  comments: PullRequestReviewCommentConnection;
  commit?: Maybe<Commit>;
  createdAt: DateTime;
  createdViaEmail: Boolean;
  databaseId?: Maybe<number>;
  editor?: Maybe<Actor>;
  id: string;
  includesCreatedEdit: Boolean;
  lastEditedAt?: Maybe<DateTime>;
  onBehalfOf: TeamConnection;
  publishedAt?: Maybe<DateTime>;
  pullRequest: PullRequest;
  reactionGroups?: Maybe<Array<ReactionGroup>>;
  reactions: ReactionConnection;
  repository: Repository;
  resourcePath: URI;
  state: PullRequestReviewState;
  submittedAt?: Maybe<DateTime>;
  updatedAt: DateTime;
  url: URI;
  userContentEdits?: Maybe<UserContentEditConnection>;
  viewerCanDelete: Boolean;
  viewerCanReact: Boolean;
  viewerCanUpdate: Boolean;
  viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
  viewerDidAuthor: Boolean;
}
export interface PullRequestReviewCommentsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface PullRequestReviewOnBehalfOfArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface PullRequestReviewReactionsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  content: Maybe<ReactionContent>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ReactionOrder>;
}
export interface PullRequestReviewUserContentEditsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export type PullRequestReviewComment = Comment & Deletable & Minimizable & Node & Reactable & RepositoryNode & Updatable & UpdatableComment &  {
  author?: Maybe<Actor>;
  authorAssociation: CommentAuthorAssociation;
  body: string;
  bodyHTML: HTML;
  bodyText: string;
  commit?: Maybe<Commit>;
  createdAt: DateTime;
  createdViaEmail: Boolean;
  databaseId?: Maybe<number>;
  diffHunk: string;
  draftedAt: DateTime;
  editor?: Maybe<Actor>;
  id: string;
  includesCreatedEdit: Boolean;
  isMinimized: Boolean;
  lastEditedAt?: Maybe<DateTime>;
  line?: Maybe<number>;
  minimizedReason?: Maybe<string>;
  originalCommit?: Maybe<Commit>;
  originalLine?: Maybe<number>;
  originalPosition: number;
  originalStartLine?: Maybe<number>;
  outdated: Boolean;
  path: string;
  position?: Maybe<number>;
  publishedAt?: Maybe<DateTime>;
  pullRequest: PullRequest;
  pullRequestReview?: Maybe<PullRequestReview>;
  reactionGroups?: Maybe<Array<ReactionGroup>>;
  reactions: ReactionConnection;
  replyTo?: Maybe<PullRequestReviewComment>;
  repository: Repository;
  resourcePath: URI;
  startLine?: Maybe<number>;
  state: PullRequestReviewCommentState;
  subjectType: PullRequestReviewThreadSubjectType;
  updatedAt: DateTime;
  url: URI;
  userContentEdits?: Maybe<UserContentEditConnection>;
  viewerCanDelete: Boolean;
  viewerCanMinimize: Boolean;
  viewerCanReact: Boolean;
  viewerCanUpdate: Boolean;
  viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
  viewerDidAuthor: Boolean;
}
export interface PullRequestReviewCommentReactionsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  content: Maybe<ReactionContent>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ReactionOrder>;
}
export interface PullRequestReviewCommentUserContentEditsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface PullRequestReviewCommentConnection {
  edges?: Maybe<Array<Maybe<PullRequestReviewCommentEdge>>>;
  nodes?: Maybe<Array<Maybe<PullRequestReviewComment>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface PullRequestReviewCommentEdge {
  cursor: string;
  node?: Maybe<PullRequestReviewComment>;
}
export enum PullRequestReviewCommentState {
  PENDING,
  SUBMITTED,
}
export interface PullRequestReviewConnection {
  edges?: Maybe<Array<Maybe<PullRequestReviewEdge>>>;
  nodes?: Maybe<Array<Maybe<PullRequestReview>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface PullRequestReviewContributionsByRepository {
  contributions: CreatedPullRequestReviewContributionConnection;
  repository: Repository;
}
export interface PullRequestReviewContributionsByRepositoryContributionsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ContributionOrder>;
}
export enum PullRequestReviewDecision {
  APPROVED,
  CHANGES_REQUESTED,
  REVIEW_REQUIRED,
}
export interface PullRequestReviewEdge {
  cursor: string;
  node?: Maybe<PullRequestReview>;
}
export enum PullRequestReviewEvent {
  APPROVE,
  COMMENT,
  DISMISS,
  REQUEST_CHANGES,
}
export enum PullRequestReviewState {
  APPROVED,
  CHANGES_REQUESTED,
  COMMENTED,
  DISMISSED,
  PENDING,
}
export type PullRequestReviewThread = Node &  {
  comments: PullRequestReviewCommentConnection;
  diffSide: DiffSide;
  id: string;
  isCollapsed: Boolean;
  isOutdated: Boolean;
  isResolved: Boolean;
  line?: Maybe<number>;
  originalLine?: Maybe<number>;
  originalStartLine?: Maybe<number>;
  path: string;
  pullRequest: PullRequest;
  repository: Repository;
  resolvedBy?: Maybe<User>;
  startDiffSide?: Maybe<DiffSide>;
  startLine?: Maybe<number>;
  subjectType: PullRequestReviewThreadSubjectType;
  viewerCanReply: Boolean;
  viewerCanResolve: Boolean;
  viewerCanUnresolve: Boolean;
}
export interface PullRequestReviewThreadCommentsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  skip: Maybe<number>;
}
export interface PullRequestReviewThreadConnection {
  edges?: Maybe<Array<Maybe<PullRequestReviewThreadEdge>>>;
  nodes?: Maybe<Array<Maybe<PullRequestReviewThread>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface PullRequestReviewThreadEdge {
  cursor: string;
  node?: Maybe<PullRequestReviewThread>;
}
export enum PullRequestReviewThreadSubjectType {
  FILE,
  LINE,
}
export interface PullRequestRevisionMarker {
  createdAt: DateTime;
  lastSeenCommit: Commit;
  pullRequest: PullRequest;
}
export enum PullRequestState {
  CLOSED,
  MERGED,
  OPEN,
}
export interface PullRequestTemplate {
  body?: Maybe<string>;
  filename?: Maybe<string>;
  repository: Repository;
}
export type PullRequestThread = Node &  {
  comments: PullRequestReviewCommentConnection;
  diffSide: DiffSide;
  id: string;
  isCollapsed: Boolean;
  isOutdated: Boolean;
  isResolved: Boolean;
  line?: Maybe<number>;
  path: string;
  pullRequest: PullRequest;
  repository: Repository;
  resolvedBy?: Maybe<User>;
  startDiffSide?: Maybe<DiffSide>;
  startLine?: Maybe<number>;
  subjectType: PullRequestReviewThreadSubjectType;
  viewerCanReply: Boolean;
  viewerCanResolve: Boolean;
  viewerCanUnresolve: Boolean;
}
export interface PullRequestThreadCommentsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  skip: Maybe<number>;
}
export interface PullRequestTimelineConnection {
  edges?: Maybe<Array<Maybe<PullRequestTimelineItemEdge>>>;
  nodes?: Maybe<Array<Maybe<PullRequestTimelineItem>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export type PullRequestTimelineItem = AssignedEvent | BaseRefDeletedEvent | BaseRefForcePushedEvent | ClosedEvent | Commit | CommitCommentThread | CrossReferencedEvent | DemilestonedEvent | DeployedEvent | DeploymentEnvironmentChangedEvent | HeadRefDeletedEvent | HeadRefForcePushedEvent | HeadRefRestoredEvent | IssueComment | LabeledEvent | LockedEvent | MergedEvent | MilestonedEvent | PullRequestReview | PullRequestReviewComment | PullRequestReviewThread | ReferencedEvent | RenamedTitleEvent | ReopenedEvent | ReviewDismissedEvent | ReviewRequestRemovedEvent | ReviewRequestedEvent | SubscribedEvent | UnassignedEvent | UnlabeledEvent | UnlockedEvent | UnsubscribedEvent | UserBlockedEvent;
export interface PullRequestTimelineItemEdge {
  cursor: string;
  node?: Maybe<PullRequestTimelineItem>;
}
export type PullRequestTimelineItems = AddedToMergeQueueEvent | AddedToProjectEvent | AssignedEvent | AutoMergeDisabledEvent | AutoMergeEnabledEvent | AutoRebaseEnabledEvent | AutoSquashEnabledEvent | AutomaticBaseChangeFailedEvent | AutomaticBaseChangeSucceededEvent | BaseRefChangedEvent | BaseRefDeletedEvent | BaseRefForcePushedEvent | ClosedEvent | CommentDeletedEvent | ConnectedEvent | ConvertToDraftEvent | ConvertedNoteToIssueEvent | ConvertedToDiscussionEvent | CrossReferencedEvent | DemilestonedEvent | DeployedEvent | DeploymentEnvironmentChangedEvent | DisconnectedEvent | HeadRefDeletedEvent | HeadRefForcePushedEvent | HeadRefRestoredEvent | IssueComment | LabeledEvent | LockedEvent | MarkedAsDuplicateEvent | MentionedEvent | MergedEvent | MilestonedEvent | MovedColumnsInProjectEvent | PinnedEvent | PullRequestCommit | PullRequestCommitCommentThread | PullRequestReview | PullRequestReviewThread | PullRequestRevisionMarker | ReadyForReviewEvent | ReferencedEvent | RemovedFromMergeQueueEvent | RemovedFromProjectEvent | RenamedTitleEvent | ReopenedEvent | ReviewDismissedEvent | ReviewRequestRemovedEvent | ReviewRequestedEvent | SubscribedEvent | TransferredEvent | UnassignedEvent | UnlabeledEvent | UnlockedEvent | UnmarkedAsDuplicateEvent | UnpinnedEvent | UnsubscribedEvent | UserBlockedEvent;
export interface PullRequestTimelineItemsConnection {
  edges?: Maybe<Array<Maybe<PullRequestTimelineItemsEdge>>>;
  filteredCount: number;
  nodes?: Maybe<Array<Maybe<PullRequestTimelineItems>>>;
  pageCount: number;
  pageInfo: PageInfo;
  totalCount: number;
  updatedAt: DateTime;
}
export interface PullRequestTimelineItemsEdge {
  cursor: string;
  node?: Maybe<PullRequestTimelineItems>;
}
export enum PullRequestTimelineItemsItemType {
  ADDED_TO_MERGE_QUEUE_EVENT,
  ADDED_TO_PROJECT_EVENT,
  ASSIGNED_EVENT,
  AUTOMATIC_BASE_CHANGE_FAILED_EVENT,
  AUTOMATIC_BASE_CHANGE_SUCCEEDED_EVENT,
  AUTO_MERGE_DISABLED_EVENT,
  AUTO_MERGE_ENABLED_EVENT,
  AUTO_REBASE_ENABLED_EVENT,
  AUTO_SQUASH_ENABLED_EVENT,
  BASE_REF_CHANGED_EVENT,
  BASE_REF_DELETED_EVENT,
  BASE_REF_FORCE_PUSHED_EVENT,
  CLOSED_EVENT,
  COMMENT_DELETED_EVENT,
  CONNECTED_EVENT,
  CONVERTED_NOTE_TO_ISSUE_EVENT,
  CONVERTED_TO_DISCUSSION_EVENT,
  CONVERT_TO_DRAFT_EVENT,
  CROSS_REFERENCED_EVENT,
  DEMILESTONED_EVENT,
  DEPLOYED_EVENT,
  DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT,
  DISCONNECTED_EVENT,
  HEAD_REF_DELETED_EVENT,
  HEAD_REF_FORCE_PUSHED_EVENT,
  HEAD_REF_RESTORED_EVENT,
  ISSUE_COMMENT,
  LABELED_EVENT,
  LOCKED_EVENT,
  MARKED_AS_DUPLICATE_EVENT,
  MENTIONED_EVENT,
  MERGED_EVENT,
  MILESTONED_EVENT,
  MOVED_COLUMNS_IN_PROJECT_EVENT,
  PINNED_EVENT,
  PULL_REQUEST_COMMIT,
  PULL_REQUEST_COMMIT_COMMENT_THREAD,
  PULL_REQUEST_REVIEW,
  PULL_REQUEST_REVIEW_THREAD,
  PULL_REQUEST_REVISION_MARKER,
  READY_FOR_REVIEW_EVENT,
  REFERENCED_EVENT,
  REMOVED_FROM_MERGE_QUEUE_EVENT,
  REMOVED_FROM_PROJECT_EVENT,
  RENAMED_TITLE_EVENT,
  REOPENED_EVENT,
  REVIEW_DISMISSED_EVENT,
  REVIEW_REQUESTED_EVENT,
  REVIEW_REQUEST_REMOVED_EVENT,
  SUBSCRIBED_EVENT,
  TRANSFERRED_EVENT,
  UNASSIGNED_EVENT,
  UNLABELED_EVENT,
  UNLOCKED_EVENT,
  UNMARKED_AS_DUPLICATE_EVENT,
  UNPINNED_EVENT,
  UNSUBSCRIBED_EVENT,
  USER_BLOCKED_EVENT,
}
export enum PullRequestUpdateState {
  CLOSED,
  OPEN,
}
export type Push = Node &  {
  id: string;
  nextSha?: Maybe<GitObjectID>;
  permalink: URI;
  previousSha?: Maybe<GitObjectID>;
  pusher: Actor;
  repository: Repository;
}
export type PushAllowance = Node &  {
  actor?: Maybe<PushAllowanceActor>;
  branchProtectionRule?: Maybe<BranchProtectionRule>;
  id: string;
}
export type PushAllowanceActor = App | Team | User;
export interface PushAllowanceConnection {
  edges?: Maybe<Array<Maybe<PushAllowanceEdge>>>;
  nodes?: Maybe<Array<Maybe<PushAllowance>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface PushAllowanceEdge {
  cursor: string;
  node?: Maybe<PushAllowance>;
}
export interface Query {
  codeOfConduct?: Maybe<CodeOfConduct>;
  codesOfConduct?: Maybe<Array<Maybe<CodeOfConduct>>>;
  enterprise?: Maybe<Enterprise>;
  enterpriseAdministratorInvitation?: Maybe<EnterpriseAdministratorInvitation>;
  enterpriseAdministratorInvitationByToken?: Maybe<EnterpriseAdministratorInvitation>;
  license?: Maybe<License>;
  licenses: Array<License>;
  marketplaceCategories: Array<MarketplaceCategory>;
  marketplaceCategory?: Maybe<MarketplaceCategory>;
  marketplaceListing?: Maybe<MarketplaceListing>;
  marketplaceListings: MarketplaceListingConnection;
  meta: GitHubMetadata;
  node?: Maybe<Node>;
  nodes: Array<Node>;
  organization?: Maybe<Organization>;
  rateLimit?: Maybe<RateLimit>;
  relay: Query;
  repository?: Maybe<Repository>;
  repositoryOwner?: Maybe<RepositoryOwner>;
  resource?: Maybe<UniformResourceLocatable>;
  search: SearchResultItemConnection;
  securityAdvisories: SecurityAdvisoryConnection;
  securityAdvisory?: Maybe<SecurityAdvisory>;
  securityVulnerabilities: SecurityVulnerabilityConnection;
  sponsorables: SponsorableItemConnection;
  topic?: Maybe<Topic>;
  user?: Maybe<User>;
  viewer: User;
}
export interface QueryCodeOfConductArgs{
  key: string;
}
export interface QueryEnterpriseArgs{
  invitationToken: Maybe<string>;
  slug: string;
}
export interface QueryEnterpriseAdministratorInvitationArgs{
  enterpriseSlug: string;
  role: EnterpriseAdministratorRole;
  userLogin: string;
}
export interface QueryEnterpriseAdministratorInvitationByTokenArgs{
  invitationToken: string;
}
export interface QueryLicenseArgs{
  key: string;
}
export interface QueryMarketplaceCategoriesArgs{
  excludeEmpty: Maybe<Boolean>;
  excludeSubcategories: Maybe<Boolean>;
  includeCategories: Maybe<Array<string>>;
}
export interface QueryMarketplaceCategoryArgs{
  slug: string;
  useTopicAliases: Maybe<Boolean>;
}
export interface QueryMarketplaceListingArgs{
  slug: string;
}
export interface QueryMarketplaceListingsArgs{
  adminId: Maybe<string>;
  after: Maybe<string>;
  allStates: Maybe<Boolean>;
  before: Maybe<string>;
  categorySlug: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  organizationId: Maybe<string>;
  primaryCategoryOnly: Maybe<Boolean>;
  slugs: Maybe<Array<Maybe<string>>>;
  useTopicAliases: Maybe<Boolean>;
  viewerCanAdmin: Maybe<Boolean>;
  withFreeTrialsOnly: Maybe<Boolean>;
}
export interface QueryNodeArgs{
  id: string;
}
export interface QueryNodesArgs{
  ids: Array<string>;
}
export interface QueryOrganizationArgs{
  login: string;
}
export interface QueryRateLimitArgs{
  dryRun: Maybe<Boolean>;
}
export interface QueryRepositoryArgs{
  followRenames: Maybe<Boolean>;
  name: string;
  owner: string;
}
export interface QueryRepositoryOwnerArgs{
  login: string;
}
export interface QueryResourceArgs{
  url: URI;
}
export interface QuerySearchArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  query: string;
  type: SearchType;
}
export interface QuerySecurityAdvisoriesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  classifications: Maybe<Array<SecurityAdvisoryClassification>>;
  first: Maybe<number>;
  identifier: Maybe<SecurityAdvisoryIdentifierFilter>;
  last: Maybe<number>;
  orderBy: Maybe<SecurityAdvisoryOrder>;
  publishedSince: Maybe<DateTime>;
  updatedSince: Maybe<DateTime>;
}
export interface QuerySecurityAdvisoryArgs{
  ghsaId: string;
}
export interface QuerySecurityVulnerabilitiesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  classifications: Maybe<Array<SecurityAdvisoryClassification>>;
  ecosystem: Maybe<SecurityAdvisoryEcosystem>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<SecurityVulnerabilityOrder>;
  package: Maybe<string>;
  severities: Maybe<Array<SecurityAdvisorySeverity>>;
}
export interface QuerySponsorablesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  dependencyEcosystem: Maybe<SecurityAdvisoryEcosystem>;
  ecosystem: Maybe<DependencyGraphEcosystem>;
  first: Maybe<number>;
  last: Maybe<number>;
  onlyDependencies: Maybe<Boolean>;
  orderBy: Maybe<SponsorableOrder>;
  orgLoginForDependencies: Maybe<string>;
}
export interface QueryTopicArgs{
  name: string;
}
export interface QueryUserArgs{
  login: string;
}
export interface RateLimit {
  cost: number;
  limit: number;
  nodeCount: number;
  remaining: number;
  resetAt: DateTime;
  used: number;
}
export interface Reactable {
  databaseId?: Maybe<number>;
  id: string;
  reactionGroups?: Maybe<Array<ReactionGroup>>;
  reactions: ReactionConnection;
  viewerCanReact: Boolean;
}
export interface ReactingUserConnection {
  edges?: Maybe<Array<Maybe<ReactingUserEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface ReactableReactionsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  content: Maybe<ReactionContent>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ReactionOrder>;
}
export interface ReactingUserEdge {
  cursor: string;
  node: User;
  reactedAt: DateTime;
}
export type Reaction = Node &  {
  content: ReactionContent;
  createdAt: DateTime;
  databaseId?: Maybe<number>;
  id: string;
  reactable: Reactable;
  user?: Maybe<User>;
}
export interface ReactionConnection {
  edges?: Maybe<Array<Maybe<ReactionEdge>>>;
  nodes?: Maybe<Array<Maybe<Reaction>>>;
  pageInfo: PageInfo;
  totalCount: number;
  viewerHasReacted: Boolean;
}
export enum ReactionContent {
  CONFUSED,
  EYES,
  HEART,
  HOORAY,
  LAUGH,
  ROCKET,
  THUMBS_DOWN,
  THUMBS_UP,
}
export interface ReactionEdge {
  cursor: string;
  node?: Maybe<Reaction>;
}
export interface ReactionGroup {
  content: ReactionContent;
  createdAt?: Maybe<DateTime>;
  reactors: ReactorConnection;
  subject: Reactable;
  users: ReactingUserConnection;
  viewerHasReacted: Boolean;
}
export interface ReactionGroupReactorsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface ReactionGroupUsersArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export type ReactionOrder = {
  direction: OrderDirection;
  field: ReactionOrderField;
}
export enum ReactionOrderField {
  CREATED_AT,
}
export type Reactor = Bot | Mannequin | Organization | User;
export interface ReactorConnection {
  edges?: Maybe<Array<Maybe<ReactorEdge>>>;
  nodes?: Maybe<Array<Maybe<Reactor>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface ReactorEdge {
  cursor: string;
  node: Reactor;
  reactedAt: DateTime;
}
export type ReadyForReviewEvent = Node & UniformResourceLocatable &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  id: string;
  pullRequest: PullRequest;
  resourcePath: URI;
  url: URI;
}
export type Ref = Node &  {
  associatedPullRequests: PullRequestConnection;
  branchProtectionRule?: Maybe<BranchProtectionRule>;
  compare?: Maybe<Comparison>;
  id: string;
  name: string;
  prefix: string;
  refUpdateRule?: Maybe<RefUpdateRule>;
  repository: Repository;
  target?: Maybe<GitObject>;
}
export interface RefAssociatedPullRequestsArgs{
  after: Maybe<string>;
  baseRefName: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  headRefName: Maybe<string>;
  labels: Maybe<Array<string>>;
  last: Maybe<number>;
  orderBy: Maybe<IssueOrder>;
  states: Maybe<Array<PullRequestState>>;
}
export interface RefCompareArgs{
  headRef: string;
}
export interface RefConnection {
  edges?: Maybe<Array<Maybe<RefEdge>>>;
  nodes?: Maybe<Array<Maybe<Ref>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface RefEdge {
  cursor: string;
  node?: Maybe<Ref>;
}
export interface RefNameConditionTarget {
  exclude: Array<string>;
  include: Array<string>;
}
export type RefNameConditionTargetInput = {
  exclude: Array<string>;
  include: Array<string>;
}
export type RefOrder = {
  direction: OrderDirection;
  field: RefOrderField;
}
export enum RefOrderField {
  ALPHABETICAL,
  TAG_COMMIT_DATE,
}
export type RefUpdate = {
  afterOid: GitObjectID;
  beforeOid?: Maybe<GitObjectID>;
  force?: Maybe<Boolean>;
  name: GitRefname;
}
export interface RefUpdateRule {
  allowsDeletions: Boolean;
  allowsForcePushes: Boolean;
  blocksCreations: Boolean;
  pattern: string;
  requiredApprovingReviewCount?: Maybe<number>;
  requiredStatusCheckContexts?: Maybe<Array<Maybe<string>>>;
  requiresCodeOwnerReviews: Boolean;
  requiresConversationResolution: Boolean;
  requiresLinearHistory: Boolean;
  requiresSignatures: Boolean;
  viewerAllowedToDismissReviews: Boolean;
  viewerCanPush: Boolean;
}
export type ReferencedEvent = Node &  {
  actor?: Maybe<Actor>;
  commit?: Maybe<Commit>;
  commitRepository: Repository;
  createdAt: DateTime;
  id: string;
  isCrossRepository: Boolean;
  isDirectReference: Boolean;
  subject: ReferencedSubject;
}
export type ReferencedSubject = Issue | PullRequest;
export type RegenerateEnterpriseIdentityProviderRecoveryCodesInput = {
  clientMutationId?: Maybe<string>;
  enterpriseId: string;
}
export interface RegenerateEnterpriseIdentityProviderRecoveryCodesPayload {
  clientMutationId?: Maybe<string>;
  identityProvider?: Maybe<EnterpriseIdentityProvider>;
}
export type RegenerateVerifiableDomainTokenInput = {
  clientMutationId?: Maybe<string>;
  id: string;
}
export interface RegenerateVerifiableDomainTokenPayload {
  clientMutationId?: Maybe<string>;
  verificationToken?: Maybe<string>;
}
export type RejectDeploymentsInput = {
  clientMutationId?: Maybe<string>;
  comment?: Maybe<string>;
  environmentIds: Array<string>;
  workflowRunId: string;
}
export interface RejectDeploymentsPayload {
  clientMutationId?: Maybe<string>;
  deployments?: Maybe<Array<Deployment>>;
}
export type Release = Node & Reactable & UniformResourceLocatable &  {
  author?: Maybe<User>;
  createdAt: DateTime;
  databaseId?: Maybe<number>;
  description?: Maybe<string>;
  descriptionHTML?: Maybe<HTML>;
  id: string;
  isDraft: Boolean;
  isLatest: Boolean;
  isPrerelease: Boolean;
  mentions?: Maybe<UserConnection>;
  name?: Maybe<string>;
  publishedAt?: Maybe<DateTime>;
  reactionGroups?: Maybe<Array<ReactionGroup>>;
  reactions: ReactionConnection;
  releaseAssets: ReleaseAssetConnection;
  repository: Repository;
  resourcePath: URI;
  shortDescriptionHTML?: Maybe<HTML>;
  tag?: Maybe<Ref>;
  tagCommit?: Maybe<Commit>;
  tagName: string;
  updatedAt: DateTime;
  url: URI;
  viewerCanReact: Boolean;
}
export interface ReleaseMentionsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface ReleaseReactionsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  content: Maybe<ReactionContent>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ReactionOrder>;
}
export interface ReleaseReleaseAssetsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  name: Maybe<string>;
}
export interface ReleaseShortDescriptionHTMLArgs{
  limit: Maybe<number>;
}
export type ReleaseAsset = Node &  {
  contentType: string;
  createdAt: DateTime;
  downloadCount: number;
  downloadUrl: URI;
  id: string;
  name: string;
  release?: Maybe<Release>;
  size: number;
  updatedAt: DateTime;
  uploadedBy: User;
  url: URI;
}
export interface ReleaseAssetConnection {
  edges?: Maybe<Array<Maybe<ReleaseAssetEdge>>>;
  nodes?: Maybe<Array<Maybe<ReleaseAsset>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface ReleaseAssetEdge {
  cursor: string;
  node?: Maybe<ReleaseAsset>;
}
export interface ReleaseConnection {
  edges?: Maybe<Array<Maybe<ReleaseEdge>>>;
  nodes?: Maybe<Array<Maybe<Release>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface ReleaseEdge {
  cursor: string;
  node?: Maybe<Release>;
}
export type ReleaseOrder = {
  direction: OrderDirection;
  field: ReleaseOrderField;
}
export enum ReleaseOrderField {
  CREATED_AT,
  NAME,
}
export type RemoveAssigneesFromAssignableInput = {
  assignableId: string;
  assigneeIds: Array<string>;
  clientMutationId?: Maybe<string>;
}
export interface RemoveAssigneesFromAssignablePayload {
  assignable?: Maybe<Assignable>;
  clientMutationId?: Maybe<string>;
}
export type RemoveEnterpriseAdminInput = {
  clientMutationId?: Maybe<string>;
  enterpriseId: string;
  login: string;
}
export interface RemoveEnterpriseAdminPayload {
  admin?: Maybe<User>;
  clientMutationId?: Maybe<string>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<string>;
  viewer?: Maybe<User>;
}
export type RemoveEnterpriseIdentityProviderInput = {
  clientMutationId?: Maybe<string>;
  enterpriseId: string;
}
export interface RemoveEnterpriseIdentityProviderPayload {
  clientMutationId?: Maybe<string>;
  identityProvider?: Maybe<EnterpriseIdentityProvider>;
}
export type RemoveEnterpriseMemberInput = {
  clientMutationId?: Maybe<string>;
  enterpriseId: string;
  userId: string;
}
export interface RemoveEnterpriseMemberPayload {
  clientMutationId?: Maybe<string>;
  enterprise?: Maybe<Enterprise>;
  user?: Maybe<User>;
  viewer?: Maybe<User>;
}
export type RemoveEnterpriseOrganizationInput = {
  clientMutationId?: Maybe<string>;
  enterpriseId: string;
  organizationId: string;
}
export interface RemoveEnterpriseOrganizationPayload {
  clientMutationId?: Maybe<string>;
  enterprise?: Maybe<Enterprise>;
  organization?: Maybe<Organization>;
  viewer?: Maybe<User>;
}
export type RemoveEnterpriseSupportEntitlementInput = {
  clientMutationId?: Maybe<string>;
  enterpriseId: string;
  login: string;
}
export interface RemoveEnterpriseSupportEntitlementPayload {
  clientMutationId?: Maybe<string>;
  message?: Maybe<string>;
}
export type RemoveLabelsFromLabelableInput = {
  clientMutationId?: Maybe<string>;
  labelIds: Array<string>;
  labelableId: string;
}
export interface RemoveLabelsFromLabelablePayload {
  clientMutationId?: Maybe<string>;
  labelable?: Maybe<Labelable>;
}
export type RemoveOutsideCollaboratorInput = {
  clientMutationId?: Maybe<string>;
  organizationId: string;
  userId: string;
}
export interface RemoveOutsideCollaboratorPayload {
  clientMutationId?: Maybe<string>;
  removedUser?: Maybe<User>;
}
export type RemoveReactionInput = {
  clientMutationId?: Maybe<string>;
  content: ReactionContent;
  subjectId: string;
}
export interface RemoveReactionPayload {
  clientMutationId?: Maybe<string>;
  reaction?: Maybe<Reaction>;
  reactionGroups?: Maybe<Array<ReactionGroup>>;
  subject?: Maybe<Reactable>;
}
export type RemoveStarInput = {
  clientMutationId?: Maybe<string>;
  starrableId: string;
}
export interface RemoveStarPayload {
  clientMutationId?: Maybe<string>;
  starrable?: Maybe<Starrable>;
}
export type RemoveUpvoteInput = {
  clientMutationId?: Maybe<string>;
  subjectId: string;
}
export interface RemoveUpvotePayload {
  clientMutationId?: Maybe<string>;
  subject?: Maybe<Votable>;
}
export type RemovedFromMergeQueueEvent = Node &  {
  actor?: Maybe<Actor>;
  beforeCommit?: Maybe<Commit>;
  createdAt: DateTime;
  enqueuer?: Maybe<User>;
  id: string;
  mergeQueue?: Maybe<MergeQueue>;
  pullRequest?: Maybe<PullRequest>;
  reason?: Maybe<string>;
}
export type RemovedFromProjectEvent = Node &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  databaseId?: Maybe<number>;
  id: string;
  project?: Maybe<Project>;
  projectColumnName: string;
}
export type RenamedTitleEvent = Node &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  currentTitle: string;
  id: string;
  previousTitle: string;
  subject: RenamedTitleSubject;
}
export type RenamedTitleSubject = Issue | PullRequest;
export type ReopenDiscussionInput = {
  clientMutationId?: Maybe<string>;
  discussionId: string;
}
export interface ReopenDiscussionPayload {
  clientMutationId?: Maybe<string>;
  discussion?: Maybe<Discussion>;
}
export type ReopenIssueInput = {
  clientMutationId?: Maybe<string>;
  issueId: string;
}
export interface ReopenIssuePayload {
  clientMutationId?: Maybe<string>;
  issue?: Maybe<Issue>;
}
export type ReopenPullRequestInput = {
  clientMutationId?: Maybe<string>;
  pullRequestId: string;
}
export interface ReopenPullRequestPayload {
  clientMutationId?: Maybe<string>;
  pullRequest?: Maybe<PullRequest>;
}
export type ReopenedEvent = Node &  {
  actor?: Maybe<Actor>;
  closable: Closable;
  createdAt: DateTime;
  id: string;
  stateReason?: Maybe<IssueStateReason>;
}
export type RepoAccessAuditEntry = AuditEntry & Node & OrganizationAuditEntryData & RepositoryAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<string>;
  repositoryResourcePath?: Maybe<URI>;
  repositoryUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
  visibility?: Maybe<RepoAccessAuditEntryVisibility>;
}
export enum RepoAccessAuditEntryVisibility {
  INTERNAL,
  PRIVATE,
  PUBLIC,
}
export type RepoAddMemberAuditEntry = AuditEntry & Node & OrganizationAuditEntryData & RepositoryAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<string>;
  repositoryResourcePath?: Maybe<URI>;
  repositoryUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
  visibility?: Maybe<RepoAddMemberAuditEntryVisibility>;
}
export enum RepoAddMemberAuditEntryVisibility {
  INTERNAL,
  PRIVATE,
  PUBLIC,
}
export type RepoAddTopicAuditEntry = AuditEntry & Node & OrganizationAuditEntryData & RepositoryAuditEntryData & TopicAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<string>;
  repositoryResourcePath?: Maybe<URI>;
  repositoryUrl?: Maybe<URI>;
  topic?: Maybe<Topic>;
  topicName?: Maybe<string>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type RepoArchivedAuditEntry = AuditEntry & Node & OrganizationAuditEntryData & RepositoryAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<string>;
  repositoryResourcePath?: Maybe<URI>;
  repositoryUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
  visibility?: Maybe<RepoArchivedAuditEntryVisibility>;
}
export enum RepoArchivedAuditEntryVisibility {
  INTERNAL,
  PRIVATE,
  PUBLIC,
}
export type RepoChangeMergeSettingAuditEntry = AuditEntry & Node & OrganizationAuditEntryData & RepositoryAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  isEnabled?: Maybe<Boolean>;
  mergeType?: Maybe<RepoChangeMergeSettingAuditEntryMergeType>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<string>;
  repositoryResourcePath?: Maybe<URI>;
  repositoryUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export enum RepoChangeMergeSettingAuditEntryMergeType {
  MERGE,
  REBASE,
  SQUASH,
}
export type RepoConfigDisableAnonymousGitAccessAuditEntry = AuditEntry & Node & OrganizationAuditEntryData & RepositoryAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<string>;
  repositoryResourcePath?: Maybe<URI>;
  repositoryUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type RepoConfigDisableCollaboratorsOnlyAuditEntry = AuditEntry & Node & OrganizationAuditEntryData & RepositoryAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<string>;
  repositoryResourcePath?: Maybe<URI>;
  repositoryUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type RepoConfigDisableContributorsOnlyAuditEntry = AuditEntry & Node & OrganizationAuditEntryData & RepositoryAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<string>;
  repositoryResourcePath?: Maybe<URI>;
  repositoryUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type RepoConfigDisableSockpuppetDisallowedAuditEntry = AuditEntry & Node & OrganizationAuditEntryData & RepositoryAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<string>;
  repositoryResourcePath?: Maybe<URI>;
  repositoryUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type RepoConfigEnableAnonymousGitAccessAuditEntry = AuditEntry & Node & OrganizationAuditEntryData & RepositoryAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<string>;
  repositoryResourcePath?: Maybe<URI>;
  repositoryUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type RepoConfigEnableCollaboratorsOnlyAuditEntry = AuditEntry & Node & OrganizationAuditEntryData & RepositoryAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<string>;
  repositoryResourcePath?: Maybe<URI>;
  repositoryUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type RepoConfigEnableContributorsOnlyAuditEntry = AuditEntry & Node & OrganizationAuditEntryData & RepositoryAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<string>;
  repositoryResourcePath?: Maybe<URI>;
  repositoryUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type RepoConfigEnableSockpuppetDisallowedAuditEntry = AuditEntry & Node & OrganizationAuditEntryData & RepositoryAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<string>;
  repositoryResourcePath?: Maybe<URI>;
  repositoryUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type RepoConfigLockAnonymousGitAccessAuditEntry = AuditEntry & Node & OrganizationAuditEntryData & RepositoryAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<string>;
  repositoryResourcePath?: Maybe<URI>;
  repositoryUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type RepoConfigUnlockAnonymousGitAccessAuditEntry = AuditEntry & Node & OrganizationAuditEntryData & RepositoryAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<string>;
  repositoryResourcePath?: Maybe<URI>;
  repositoryUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type RepoCreateAuditEntry = AuditEntry & Node & OrganizationAuditEntryData & RepositoryAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  forkParentName?: Maybe<string>;
  forkSourceName?: Maybe<string>;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<string>;
  repositoryResourcePath?: Maybe<URI>;
  repositoryUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
  visibility?: Maybe<RepoCreateAuditEntryVisibility>;
}
export enum RepoCreateAuditEntryVisibility {
  INTERNAL,
  PRIVATE,
  PUBLIC,
}
export type RepoDestroyAuditEntry = AuditEntry & Node & OrganizationAuditEntryData & RepositoryAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<string>;
  repositoryResourcePath?: Maybe<URI>;
  repositoryUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
  visibility?: Maybe<RepoDestroyAuditEntryVisibility>;
}
export enum RepoDestroyAuditEntryVisibility {
  INTERNAL,
  PRIVATE,
  PUBLIC,
}
export type RepoRemoveMemberAuditEntry = AuditEntry & Node & OrganizationAuditEntryData & RepositoryAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<string>;
  repositoryResourcePath?: Maybe<URI>;
  repositoryUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
  visibility?: Maybe<RepoRemoveMemberAuditEntryVisibility>;
}
export enum RepoRemoveMemberAuditEntryVisibility {
  INTERNAL,
  PRIVATE,
  PUBLIC,
}
export type RepoRemoveTopicAuditEntry = AuditEntry & Node & OrganizationAuditEntryData & RepositoryAuditEntryData & TopicAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<string>;
  repositoryResourcePath?: Maybe<URI>;
  repositoryUrl?: Maybe<URI>;
  topic?: Maybe<Topic>;
  topicName?: Maybe<string>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export enum ReportedContentClassifiers {
  ABUSE,
  DUPLICATE,
  OFF_TOPIC,
  OUTDATED,
  RESOLVED,
  SPAM,
}
export type Repository = Node & PackageOwner & ProjectOwner & ProjectV2Recent & RepositoryInfo & Starrable & Subscribable & UniformResourceLocatable &  {
  allowUpdateBranch: Boolean;
  archivedAt?: Maybe<DateTime>;
  assignableUsers: UserConnection;
  autoMergeAllowed: Boolean;
  branchProtectionRules: BranchProtectionRuleConnection;
  codeOfConduct?: Maybe<CodeOfConduct>;
  codeowners?: Maybe<RepositoryCodeowners>;
  collaborators?: Maybe<RepositoryCollaboratorConnection>;
  commitComments: CommitCommentConnection;
  contactLinks?: Maybe<Array<RepositoryContactLink>>;
  createdAt: DateTime;
  databaseId?: Maybe<number>;
  defaultBranchRef?: Maybe<Ref>;
  deleteBranchOnMerge: Boolean;
  dependencyGraphManifests?: Maybe<DependencyGraphManifestConnection>;
  deployKeys: DeployKeyConnection;
  deployments: DeploymentConnection;
  description?: Maybe<string>;
  descriptionHTML: HTML;
  discussion?: Maybe<Discussion>;
  discussionCategories: DiscussionCategoryConnection;
  discussionCategory?: Maybe<DiscussionCategory>;
  discussions: DiscussionConnection;
  diskUsage?: Maybe<number>;
  environment?: Maybe<Environment>;
  environments: EnvironmentConnection;
  forkCount: number;
  forkingAllowed: Boolean;
  forks: RepositoryConnection;
  fundingLinks: Array<FundingLink>;
  hasDiscussionsEnabled: Boolean;
  hasIssuesEnabled: Boolean;
  hasProjectsEnabled: Boolean;
  hasVulnerabilityAlertsEnabled: Boolean;
  hasWikiEnabled: Boolean;
  homepageUrl?: Maybe<URI>;
  id: string;
  interactionAbility?: Maybe<RepositoryInteractionAbility>;
  isArchived: Boolean;
  isBlankIssuesEnabled: Boolean;
  isDisabled: Boolean;
  isEmpty: Boolean;
  isFork: Boolean;
  isInOrganization: Boolean;
  isLocked: Boolean;
  isMirror: Boolean;
  isPrivate: Boolean;
  isSecurityPolicyEnabled?: Maybe<Boolean>;
  isTemplate: Boolean;
  isUserConfigurationRepository: Boolean;
  issue?: Maybe<Issue>;
  issueOrPullRequest?: Maybe<IssueOrPullRequest>;
  issueTemplates?: Maybe<Array<IssueTemplate>>;
  issues: IssueConnection;
  label?: Maybe<Label>;
  labels?: Maybe<LabelConnection>;
  languages?: Maybe<LanguageConnection>;
  latestRelease?: Maybe<Release>;
  licenseInfo?: Maybe<License>;
  lockReason?: Maybe<RepositoryLockReason>;
  mentionableUsers: UserConnection;
  mergeCommitAllowed: Boolean;
  mergeCommitMessage: MergeCommitMessage;
  mergeCommitTitle: MergeCommitTitle;
  mergeQueue?: Maybe<MergeQueue>;
  milestone?: Maybe<Milestone>;
  milestones?: Maybe<MilestoneConnection>;
  mirrorUrl?: Maybe<URI>;
  name: string;
  nameWithOwner: string;
  object?: Maybe<GitObject>;
  openGraphImageUrl: URI;
  owner: RepositoryOwner;
  packages: PackageConnection;
  parent?: Maybe<Repository>;
  pinnedDiscussions: PinnedDiscussionConnection;
  pinnedIssues?: Maybe<PinnedIssueConnection>;
  primaryLanguage?: Maybe<Language>;
  project?: Maybe<Project>;
  projectV2?: Maybe<ProjectV2>;
  projects: ProjectConnection;
  projectsResourcePath: URI;
  projectsUrl: URI;
  projectsV2: ProjectV2Connection;
  pullRequest?: Maybe<PullRequest>;
  pullRequestTemplates?: Maybe<Array<PullRequestTemplate>>;
  pullRequests: PullRequestConnection;
  pushedAt?: Maybe<DateTime>;
  rebaseMergeAllowed: Boolean;
  recentProjects: ProjectV2Connection;
  ref?: Maybe<Ref>;
  refs?: Maybe<RefConnection>;
  release?: Maybe<Release>;
  releases: ReleaseConnection;
  repositoryTopics: RepositoryTopicConnection;
  resourcePath: URI;
  ruleset?: Maybe<RepositoryRuleset>;
  rulesets?: Maybe<RepositoryRulesetConnection>;
  securityPolicyUrl?: Maybe<URI>;
  shortDescriptionHTML: HTML;
  squashMergeAllowed: Boolean;
  squashMergeCommitMessage: SquashMergeCommitMessage;
  squashMergeCommitTitle: SquashMergeCommitTitle;
  squashPrTitleUsedAsDefault: Boolean;
  sshUrl: GitSSHRemote;
  stargazerCount: number;
  stargazers: StargazerConnection;
  submodules: SubmoduleConnection;
  tempCloneToken?: Maybe<string>;
  templateRepository?: Maybe<Repository>;
  updatedAt: DateTime;
  url: URI;
  usesCustomOpenGraphImage: Boolean;
  viewerCanAdminister: Boolean;
  viewerCanCreateProjects: Boolean;
  viewerCanSubscribe: Boolean;
  viewerCanUpdateTopics: Boolean;
  viewerDefaultCommitEmail?: Maybe<string>;
  viewerDefaultMergeMethod: PullRequestMergeMethod;
  viewerHasStarred: Boolean;
  viewerPermission?: Maybe<RepositoryPermission>;
  viewerPossibleCommitEmails?: Maybe<Array<string>>;
  viewerSubscription?: Maybe<SubscriptionState>;
  visibility: RepositoryVisibility;
  vulnerabilityAlert?: Maybe<RepositoryVulnerabilityAlert>;
  vulnerabilityAlerts?: Maybe<RepositoryVulnerabilityAlertConnection>;
  watchers: UserConnection;
  webCommitSignoffRequired: Boolean;
}
export interface RepositoryAssignableUsersArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  query: Maybe<string>;
}
export interface RepositoryBranchProtectionRulesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface RepositoryCodeownersArgs{
  refName: Maybe<string>;
}
export interface RepositoryCollaboratorsArgs{
  affiliation: Maybe<CollaboratorAffiliation>;
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  login: Maybe<string>;
  query: Maybe<string>;
}
export interface RepositoryCommitCommentsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface RepositoryDependencyGraphManifestsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  dependenciesAfter: Maybe<string>;
  dependenciesFirst: Maybe<number>;
  first: Maybe<number>;
  last: Maybe<number>;
  withDependencies: Maybe<Boolean>;
}
export interface RepositoryDeployKeysArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface RepositoryDeploymentsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  environments: Maybe<Array<string>>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<DeploymentOrder>;
}
export interface RepositoryDiscussionArgs{
  number: number;
}
export interface RepositoryDiscussionCategoriesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  filterByAssignable: Maybe<Boolean>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface RepositoryDiscussionCategoryArgs{
  slug: string;
}
export interface RepositoryDiscussionsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  categoryId: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<DiscussionOrder>;
  states: Maybe<Array<DiscussionState>>;
}
export interface RepositoryEnvironmentArgs{
  name: string;
}
export interface RepositoryEnvironmentsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<Environments>;
}
export interface RepositoryForksArgs{
  affiliations: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  hasIssuesEnabled: Maybe<Boolean>;
  isLocked: Maybe<Boolean>;
  last: Maybe<number>;
  orderBy: Maybe<RepositoryOrder>;
  ownerAffiliations: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  privacy: Maybe<RepositoryPrivacy>;
}
export interface RepositoryIssueArgs{
  number: number;
}
export interface RepositoryIssueOrPullRequestArgs{
  number: number;
}
export interface RepositoryIssuesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  filterBy: Maybe<IssueFilters>;
  first: Maybe<number>;
  labels: Maybe<Array<string>>;
  last: Maybe<number>;
  orderBy: Maybe<IssueOrder>;
  states: Maybe<Array<IssueState>>;
}
export interface RepositoryLabelArgs{
  name: string;
}
export interface RepositoryLabelsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<LabelOrder>;
  query: Maybe<string>;
}
export interface RepositoryLanguagesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<LanguageOrder>;
}
export interface RepositoryMentionableUsersArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  query: Maybe<string>;
}
export interface RepositoryMergeQueueArgs{
  branch: Maybe<string>;
}
export interface RepositoryMilestoneArgs{
  number: number;
}
export interface RepositoryMilestonesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<MilestoneOrder>;
  query: Maybe<string>;
  states: Maybe<Array<MilestoneState>>;
}
export interface RepositoryObjectArgs{
  expression: Maybe<string>;
  oid: Maybe<GitObjectID>;
}
export interface RepositoryPackagesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  names: Maybe<Array<Maybe<string>>>;
  orderBy: Maybe<PackageOrder>;
  packageType: Maybe<PackageType>;
  repositoryId: Maybe<string>;
}
export interface RepositoryPinnedDiscussionsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface RepositoryPinnedIssuesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface RepositoryProjectArgs{
  number: number;
}
export interface RepositoryProjectV2Args{
  number: number;
}
export interface RepositoryProjectsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ProjectOrder>;
  search: Maybe<string>;
  states: Maybe<Array<ProjectState>>;
}
export interface RepositoryProjectsV2Args{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ProjectV2Order>;
  query: Maybe<string>;
}
export interface RepositoryPullRequestArgs{
  number: number;
}
export interface RepositoryPullRequestsArgs{
  after: Maybe<string>;
  baseRefName: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  headRefName: Maybe<string>;
  labels: Maybe<Array<string>>;
  last: Maybe<number>;
  orderBy: Maybe<IssueOrder>;
  states: Maybe<Array<PullRequestState>>;
}
export interface RepositoryRecentProjectsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface RepositoryRefArgs{
  qualifiedName: string;
}
export interface RepositoryRefsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  direction: Maybe<OrderDirection>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<RefOrder>;
  query: Maybe<string>;
  refPrefix: string;
}
export interface RepositoryReleaseArgs{
  tagName: string;
}
export interface RepositoryReleasesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ReleaseOrder>;
}
export interface RepositoryRepositoryTopicsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface RepositoryRulesetArgs{
  databaseId: number;
  includeParents: Maybe<Boolean>;
}
export interface RepositoryRulesetsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  includeParents: Maybe<Boolean>;
  last: Maybe<number>;
}
export interface RepositoryShortDescriptionHTMLArgs{
  limit: Maybe<number>;
}
export interface RepositoryStargazersArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<StarOrder>;
}
export interface RepositorySubmodulesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface RepositoryVulnerabilityAlertArgs{
  number: number;
}
export interface RepositoryVulnerabilityAlertsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  dependencyScopes: Maybe<Array<RepositoryVulnerabilityAlertDependencyScope>>;
  first: Maybe<number>;
  last: Maybe<number>;
  states: Maybe<Array<RepositoryVulnerabilityAlertState>>;
}
export interface RepositoryWatchersArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export enum RepositoryAffiliation {
  COLLABORATOR,
  ORGANIZATION_MEMBER,
  OWNER,
}
export interface RepositoryAuditEntryData {
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<string>;
  repositoryResourcePath?: Maybe<URI>;
  repositoryUrl?: Maybe<URI>;
}
export interface RepositoryCodeowners {
  errors: Array<RepositoryCodeownersError>;
}
export interface RepositoryCodeownersError {
  column: number;
  kind: string;
  line: number;
  message: string;
  path: string;
  source: string;
  suggestion?: Maybe<string>;
}
export interface RepositoryCollaboratorConnection {
  edges?: Maybe<Array<Maybe<RepositoryCollaboratorEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface RepositoryCollaboratorEdge {
  cursor: string;
  node: User;
  permission: RepositoryPermission;
  permissionSources?: Maybe<Array<PermissionSource>>;
}
export interface RepositoryConnection {
  edges?: Maybe<Array<Maybe<RepositoryEdge>>>;
  nodes?: Maybe<Array<Maybe<Repository>>>;
  pageInfo: PageInfo;
  totalCount: number;
  totalDiskUsage: number;
}
export interface RepositoryContactLink {
  about: string;
  name: string;
  url: URI;
}
export enum RepositoryContributionType {
  COMMIT,
  ISSUE,
  PULL_REQUEST,
  PULL_REQUEST_REVIEW,
  REPOSITORY,
}
export interface RepositoryDiscussionAuthor {
  repositoryDiscussions: DiscussionConnection;
}
export interface RepositoryDiscussionCommentAuthor {
  repositoryDiscussionComments: DiscussionCommentConnection;
}
export interface RepositoryEdge {
  cursor: string;
  node?: Maybe<Repository>;
}
export interface RepositoryDiscussionAuthorRepositoryDiscussionsArgs{
  after: Maybe<string>;
  answered: Maybe<Boolean>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<DiscussionOrder>;
  repositoryId: Maybe<string>;
  states: Maybe<Array<DiscussionState>>;
}
export interface RepositoryDiscussionCommentAuthorRepositoryDiscussionCommentsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  onlyAnswers: Maybe<Boolean>;
  repositoryId: Maybe<string>;
}
export interface RepositoryIdConditionTarget {
  repositoryIds: Array<string>;
}
export type RepositoryIdConditionTargetInput = {
  repositoryIds: Array<string>;
}
export interface RepositoryInfo {
  archivedAt?: Maybe<DateTime>;
  createdAt: DateTime;
  description?: Maybe<string>;
  descriptionHTML: HTML;
  forkCount: number;
  hasDiscussionsEnabled: Boolean;
  hasIssuesEnabled: Boolean;
  hasProjectsEnabled: Boolean;
  hasWikiEnabled: Boolean;
  homepageUrl?: Maybe<URI>;
  isArchived: Boolean;
  isFork: Boolean;
  isInOrganization: Boolean;
  isLocked: Boolean;
  isMirror: Boolean;
  isPrivate: Boolean;
  isTemplate: Boolean;
  licenseInfo?: Maybe<License>;
  lockReason?: Maybe<RepositoryLockReason>;
  mirrorUrl?: Maybe<URI>;
  name: string;
  nameWithOwner: string;
  openGraphImageUrl: URI;
  owner: RepositoryOwner;
  pushedAt?: Maybe<DateTime>;
  resourcePath: URI;
  shortDescriptionHTML: HTML;
  updatedAt: DateTime;
  url: URI;
  usesCustomOpenGraphImage: Boolean;
  visibility: RepositoryVisibility;
}
export interface RepositoryInteractionAbility {
  expiresAt?: Maybe<DateTime>;
  limit: RepositoryInteractionLimit;
  origin: RepositoryInteractionLimitOrigin;
}
export interface RepositoryInfoShortDescriptionHTMLArgs{
  limit: Maybe<number>;
}
export enum RepositoryInteractionLimit {
  COLLABORATORS_ONLY,
  CONTRIBUTORS_ONLY,
  EXISTING_USERS,
  NO_LIMIT,
}
export enum RepositoryInteractionLimitExpiry {
  ONE_DAY,
  ONE_MONTH,
  ONE_WEEK,
  SIX_MONTHS,
  THREE_DAYS,
}
export enum RepositoryInteractionLimitOrigin {
  ORGANIZATION,
  REPOSITORY,
  USER,
}
export type RepositoryInvitation = Node &  {
  email?: Maybe<string>;
  id: string;
  invitee?: Maybe<User>;
  inviter: User;
  permalink: URI;
  permission: RepositoryPermission;
  repository?: Maybe<RepositoryInfo>;
}
export interface RepositoryInvitationConnection {
  edges?: Maybe<Array<Maybe<RepositoryInvitationEdge>>>;
  nodes?: Maybe<Array<Maybe<RepositoryInvitation>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface RepositoryInvitationEdge {
  cursor: string;
  node?: Maybe<RepositoryInvitation>;
}
export type RepositoryInvitationOrder = {
  direction: OrderDirection;
  field: RepositoryInvitationOrderField;
}
export enum RepositoryInvitationOrderField {
  CREATED_AT,
}
export enum RepositoryLockReason {
  BILLING,
  MIGRATING,
  MOVING,
  RENAME,
  TRADE_RESTRICTION,
}
export type RepositoryMigration = Migration & Node &  {
  continueOnError: Boolean;
  createdAt: DateTime;
  databaseId?: Maybe<string>;
  failureReason?: Maybe<string>;
  id: string;
  migrationLogUrl?: Maybe<URI>;
  migrationSource: MigrationSource;
  repositoryName: string;
  sourceUrl: URI;
  state: MigrationState;
  warningsCount: number;
}
export interface RepositoryMigrationConnection {
  edges?: Maybe<Array<Maybe<RepositoryMigrationEdge>>>;
  nodes?: Maybe<Array<Maybe<RepositoryMigration>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface RepositoryMigrationEdge {
  cursor: string;
  node?: Maybe<RepositoryMigration>;
}
export type RepositoryMigrationOrder = {
  direction: RepositoryMigrationOrderDirection;
  field: RepositoryMigrationOrderField;
}
export enum RepositoryMigrationOrderDirection {
  ASC,
  DESC,
}
export enum RepositoryMigrationOrderField {
  CREATED_AT,
}
export interface RepositoryNameConditionTarget {
  exclude: Array<string>;
  include: Array<string>;
  protected: Boolean;
}
export type RepositoryNameConditionTargetInput = {
  exclude: Array<string>;
  include: Array<string>;
  protected?: Maybe<Boolean>;
}
export interface RepositoryNode {
  repository: Repository;
}
export type RepositoryOrder = {
  direction: OrderDirection;
  field: RepositoryOrderField;
}
export enum RepositoryOrderField {
  CREATED_AT,
  NAME,
  PUSHED_AT,
  STARGAZERS,
  UPDATED_AT,
}
export interface RepositoryOwner {
  avatarUrl: URI;
  id: string;
  login: string;
  repositories: RepositoryConnection;
  repository?: Maybe<Repository>;
  resourcePath: URI;
  url: URI;
}
export enum RepositoryPermission {
  ADMIN,
  MAINTAIN,
  READ,
  TRIAGE,
  WRITE,
}
export enum RepositoryPrivacy {
  PRIVATE,
  PUBLIC,
}
export type RepositoryRule = Node &  {
  id: string;
  parameters?: Maybe<RuleParameters>;
  type: RepositoryRuleType;
}
export interface RepositoryOwnerAvatarUrlArgs{
  size: Maybe<number>;
}
export interface RepositoryOwnerRepositoriesArgs{
  affiliations: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  hasIssuesEnabled: Maybe<Boolean>;
  isArchived: Maybe<Boolean>;
  isFork: Maybe<Boolean>;
  isLocked: Maybe<Boolean>;
  last: Maybe<number>;
  orderBy: Maybe<RepositoryOrder>;
  ownerAffiliations: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  privacy: Maybe<RepositoryPrivacy>;
}
export interface RepositoryOwnerRepositoryArgs{
  followRenames: Maybe<Boolean>;
  name: string;
}
export interface RepositoryRuleConditions {
  refName?: Maybe<RefNameConditionTarget>;
  repositoryId?: Maybe<RepositoryIdConditionTarget>;
  repositoryName?: Maybe<RepositoryNameConditionTarget>;
}
export type RepositoryRuleConditionsInput = {
  refName?: Maybe<RefNameConditionTargetInput>;
  repositoryId?: Maybe<RepositoryIdConditionTargetInput>;
  repositoryName?: Maybe<RepositoryNameConditionTargetInput>;
}
export interface RepositoryRuleConnection {
  edges?: Maybe<Array<Maybe<RepositoryRuleEdge>>>;
  nodes?: Maybe<Array<Maybe<RepositoryRule>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface RepositoryRuleEdge {
  cursor: string;
  node?: Maybe<RepositoryRule>;
}
export type RepositoryRuleInput = {
  id?: Maybe<string>;
  parameters?: Maybe<RuleParametersInput>;
  type: RepositoryRuleType;
}
export enum RepositoryRuleType {
  BRANCH_NAME_PATTERN,
  COMMITTER_EMAIL_PATTERN,
  COMMIT_AUTHOR_EMAIL_PATTERN,
  COMMIT_MESSAGE_PATTERN,
  CREATION,
  DELETION,
  NON_FAST_FORWARD,
  PULL_REQUEST,
  REQUIRED_DEPLOYMENTS,
  REQUIRED_LINEAR_HISTORY,
  REQUIRED_SIGNATURES,
  REQUIRED_STATUS_CHECKS,
  TAG_NAME_PATTERN,
  UPDATE,
}
export type RepositoryRuleset = Node &  {
  bypassActors?: Maybe<RepositoryRulesetBypassActorConnection>;
  conditions: RepositoryRuleConditions;
  createdAt: DateTime;
  databaseId?: Maybe<number>;
  enforcement: RuleEnforcement;
  id: string;
  name: string;
  rules?: Maybe<RepositoryRuleConnection>;
  source: RuleSource;
  target?: Maybe<RepositoryRulesetTarget>;
  updatedAt: DateTime;
}
export interface RepositoryRulesetBypassActorsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface RepositoryRulesetRulesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  type: Maybe<RepositoryRuleType>;
}
export type RepositoryRulesetBypassActor = Node &  {
  actor?: Maybe<BypassActor>;
  bypassMode?: Maybe<RepositoryRulesetBypassActorBypassMode>;
  id: string;
  organizationAdmin: Boolean;
  repositoryRoleDatabaseId?: Maybe<number>;
  repositoryRoleName?: Maybe<string>;
  repositoryRuleset?: Maybe<RepositoryRuleset>;
}
export enum RepositoryRulesetBypassActorBypassMode {
  ALWAYS,
  PULL_REQUEST,
}
export interface RepositoryRulesetBypassActorConnection {
  edges?: Maybe<Array<Maybe<RepositoryRulesetBypassActorEdge>>>;
  nodes?: Maybe<Array<Maybe<RepositoryRulesetBypassActor>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface RepositoryRulesetBypassActorEdge {
  cursor: string;
  node?: Maybe<RepositoryRulesetBypassActor>;
}
export type RepositoryRulesetBypassActorInput = {
  actorId?: Maybe<string>;
  bypassMode: RepositoryRulesetBypassActorBypassMode;
  organizationAdmin?: Maybe<Boolean>;
  repositoryRoleDatabaseId?: Maybe<number>;
}
export interface RepositoryRulesetConnection {
  edges?: Maybe<Array<Maybe<RepositoryRulesetEdge>>>;
  nodes?: Maybe<Array<Maybe<RepositoryRuleset>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface RepositoryRulesetEdge {
  cursor: string;
  node?: Maybe<RepositoryRuleset>;
}
export enum RepositoryRulesetTarget {
  BRANCH,
  TAG,
}
export type RepositoryTopic = Node & UniformResourceLocatable &  {
  id: string;
  resourcePath: URI;
  topic: Topic;
  url: URI;
}
export interface RepositoryTopicConnection {
  edges?: Maybe<Array<Maybe<RepositoryTopicEdge>>>;
  nodes?: Maybe<Array<Maybe<RepositoryTopic>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface RepositoryTopicEdge {
  cursor: string;
  node?: Maybe<RepositoryTopic>;
}
export enum RepositoryVisibility {
  INTERNAL,
  PRIVATE,
  PUBLIC,
}
export type RepositoryVisibilityChangeDisableAuditEntry = AuditEntry & EnterpriseAuditEntryData & Node & OrganizationAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  enterpriseResourcePath?: Maybe<URI>;
  enterpriseSlug?: Maybe<string>;
  enterpriseUrl?: Maybe<URI>;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type RepositoryVisibilityChangeEnableAuditEntry = AuditEntry & EnterpriseAuditEntryData & Node & OrganizationAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  enterpriseResourcePath?: Maybe<URI>;
  enterpriseSlug?: Maybe<string>;
  enterpriseUrl?: Maybe<URI>;
  id: string;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type RepositoryVulnerabilityAlert = Node & RepositoryNode &  {
  autoDismissedAt?: Maybe<DateTime>;
  createdAt: DateTime;
  dependabotUpdate?: Maybe<DependabotUpdate>;
  dependencyScope?: Maybe<RepositoryVulnerabilityAlertDependencyScope>;
  dismissComment?: Maybe<string>;
  dismissReason?: Maybe<string>;
  dismissedAt?: Maybe<DateTime>;
  dismisser?: Maybe<User>;
  fixedAt?: Maybe<DateTime>;
  id: string;
  number: number;
  repository: Repository;
  securityAdvisory?: Maybe<SecurityAdvisory>;
  securityVulnerability?: Maybe<SecurityVulnerability>;
  state: RepositoryVulnerabilityAlertState;
  vulnerableManifestFilename: string;
  vulnerableManifestPath: string;
  vulnerableRequirements?: Maybe<string>;
}
export interface RepositoryVulnerabilityAlertConnection {
  edges?: Maybe<Array<Maybe<RepositoryVulnerabilityAlertEdge>>>;
  nodes?: Maybe<Array<Maybe<RepositoryVulnerabilityAlert>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export enum RepositoryVulnerabilityAlertDependencyScope {
  DEVELOPMENT,
  RUNTIME,
}
export interface RepositoryVulnerabilityAlertEdge {
  cursor: string;
  node?: Maybe<RepositoryVulnerabilityAlert>;
}
export enum RepositoryVulnerabilityAlertState {
  AUTO_DISMISSED,
  DISMISSED,
  FIXED,
  OPEN,
}
export type RequestReviewsInput = {
  clientMutationId?: Maybe<string>;
  pullRequestId: string;
  teamIds?: Maybe<Array<string>>;
  union?: Maybe<Boolean>;
  userIds?: Maybe<Array<string>>;
}
export interface RequestReviewsPayload {
  actor?: Maybe<Actor>;
  clientMutationId?: Maybe<string>;
  pullRequest?: Maybe<PullRequest>;
  requestedReviewersEdge?: Maybe<UserEdge>;
}
export enum RequestableCheckStatusState {
  COMPLETED,
  IN_PROGRESS,
  PENDING,
  QUEUED,
  WAITING,
}
export type RequestedReviewer = Bot | Mannequin | Team | User;
export interface RequestedReviewerConnection {
  edges?: Maybe<Array<Maybe<RequestedReviewerEdge>>>;
  nodes?: Maybe<Array<Maybe<RequestedReviewer>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface RequestedReviewerEdge {
  cursor: string;
  node?: Maybe<RequestedReviewer>;
}
export interface RequirableByPullRequest {
  isRequired: Boolean;
}
export interface RequiredDeploymentsParameters {
  requiredDeploymentEnvironments: Array<string>;
}
export interface RequirableByPullRequestIsRequiredArgs{
  pullRequestId: Maybe<string>;
  pullRequestNumber: Maybe<number>;
}
export type RequiredDeploymentsParametersInput = {
  requiredDeploymentEnvironments: Array<string>;
}
export interface RequiredStatusCheckDescription {
  app?: Maybe<App>;
  context: string;
}
export type RequiredStatusCheckInput = {
  appId?: Maybe<string>;
  context: string;
}
export interface RequiredStatusChecksParameters {
  requiredStatusChecks: Array<StatusCheckConfiguration>;
  strictRequiredStatusChecksPolicy: Boolean;
}
export type RequiredStatusChecksParametersInput = {
  requiredStatusChecks: Array<StatusCheckConfigurationInput>;
  strictRequiredStatusChecksPolicy: Boolean;
}
export type RerequestCheckSuiteInput = {
  checkSuiteId: string;
  clientMutationId?: Maybe<string>;
  repositoryId: string;
}
export interface RerequestCheckSuitePayload {
  checkSuite?: Maybe<CheckSuite>;
  clientMutationId?: Maybe<string>;
}
export type ResolveReviewThreadInput = {
  clientMutationId?: Maybe<string>;
  threadId: string;
}
export interface ResolveReviewThreadPayload {
  clientMutationId?: Maybe<string>;
  thread?: Maybe<PullRequestReviewThread>;
}
export type RestrictedContribution = Contribution &  {
  isRestricted: Boolean;
  occurredAt: DateTime;
  resourcePath: URI;
  url: URI;
  user: User;
}
export type RetireSponsorsTierInput = {
  clientMutationId?: Maybe<string>;
  tierId: string;
}
export interface RetireSponsorsTierPayload {
  clientMutationId?: Maybe<string>;
  sponsorsTier?: Maybe<SponsorsTier>;
}
export type RevertPullRequestInput = {
  body?: Maybe<string>;
  clientMutationId?: Maybe<string>;
  draft?: Maybe<Boolean>;
  pullRequestId: string;
  title?: Maybe<string>;
}
export interface RevertPullRequestPayload {
  clientMutationId?: Maybe<string>;
  pullRequest?: Maybe<PullRequest>;
  revertPullRequest?: Maybe<PullRequest>;
}
export type ReviewDismissalAllowance = Node &  {
  actor?: Maybe<ReviewDismissalAllowanceActor>;
  branchProtectionRule?: Maybe<BranchProtectionRule>;
  id: string;
}
export type ReviewDismissalAllowanceActor = App | Team | User;
export interface ReviewDismissalAllowanceConnection {
  edges?: Maybe<Array<Maybe<ReviewDismissalAllowanceEdge>>>;
  nodes?: Maybe<Array<Maybe<ReviewDismissalAllowance>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface ReviewDismissalAllowanceEdge {
  cursor: string;
  node?: Maybe<ReviewDismissalAllowance>;
}
export type ReviewDismissedEvent = Node & UniformResourceLocatable &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  databaseId?: Maybe<number>;
  dismissalMessage?: Maybe<string>;
  dismissalMessageHTML?: Maybe<string>;
  id: string;
  previousReviewState: PullRequestReviewState;
  pullRequest: PullRequest;
  pullRequestCommit?: Maybe<PullRequestCommit>;
  resourcePath: URI;
  review?: Maybe<PullRequestReview>;
  url: URI;
}
export type ReviewRequest = Node &  {
  asCodeOwner: Boolean;
  databaseId?: Maybe<number>;
  id: string;
  pullRequest: PullRequest;
  requestedReviewer?: Maybe<RequestedReviewer>;
}
export interface ReviewRequestConnection {
  edges?: Maybe<Array<Maybe<ReviewRequestEdge>>>;
  nodes?: Maybe<Array<Maybe<ReviewRequest>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface ReviewRequestEdge {
  cursor: string;
  node?: Maybe<ReviewRequest>;
}
export type ReviewRequestRemovedEvent = Node &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  id: string;
  pullRequest: PullRequest;
  requestedReviewer?: Maybe<RequestedReviewer>;
}
export type ReviewRequestedEvent = Node &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  id: string;
  pullRequest: PullRequest;
  requestedReviewer?: Maybe<RequestedReviewer>;
}
export type ReviewStatusHovercardContext = HovercardContext &  {
  message: string;
  octicon: string;
  reviewDecision?: Maybe<PullRequestReviewDecision>;
}
export type RevokeEnterpriseOrganizationsMigratorRoleInput = {
  clientMutationId?: Maybe<string>;
  enterpriseId: string;
  login: string;
}
export interface RevokeEnterpriseOrganizationsMigratorRolePayload {
  clientMutationId?: Maybe<string>;
  organizations?: Maybe<OrganizationConnection>;
}
export interface RevokeEnterpriseOrganizationsMigratorRolePayloadOrganizationsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export type RevokeMigratorRoleInput = {
  actor: string;
  actorType: ActorType;
  clientMutationId?: Maybe<string>;
  organizationId: string;
}
export interface RevokeMigratorRolePayload {
  clientMutationId?: Maybe<string>;
  success?: Maybe<Boolean>;
}
export enum RoleInOrganization {
  DIRECT_MEMBER,
  OWNER,
  UNAFFILIATED,
}
export enum RuleEnforcement {
  ACTIVE,
  DISABLED,
  EVALUATE,
}
export type RuleParameters = BranchNamePatternParameters | CommitAuthorEmailPatternParameters | CommitMessagePatternParameters | CommitterEmailPatternParameters | PullRequestParameters | RequiredDeploymentsParameters | RequiredStatusChecksParameters | TagNamePatternParameters | UpdateParameters;
export type RuleParametersInput = {
  branchNamePattern?: Maybe<BranchNamePatternParametersInput>;
  commitAuthorEmailPattern?: Maybe<CommitAuthorEmailPatternParametersInput>;
  commitMessagePattern?: Maybe<CommitMessagePatternParametersInput>;
  committerEmailPattern?: Maybe<CommitterEmailPatternParametersInput>;
  pullRequest?: Maybe<PullRequestParametersInput>;
  requiredDeployments?: Maybe<RequiredDeploymentsParametersInput>;
  requiredStatusChecks?: Maybe<RequiredStatusChecksParametersInput>;
  tagNamePattern?: Maybe<TagNamePatternParametersInput>;
  update?: Maybe<UpdateParametersInput>;
}
export type RuleSource = Organization | Repository;
export enum SamlDigestAlgorithm {
  SHA1,
  SHA256,
  SHA384,
  SHA512,
}
export enum SamlSignatureAlgorithm {
  RSA_SHA1,
  RSA_SHA256,
  RSA_SHA384,
  RSA_SHA512,
}
export type SavedReply = Node &  {
  body: string;
  bodyHTML: HTML;
  databaseId?: Maybe<number>;
  id: string;
  title: string;
  user?: Maybe<Actor>;
}
export interface SavedReplyConnection {
  edges?: Maybe<Array<Maybe<SavedReplyEdge>>>;
  nodes?: Maybe<Array<Maybe<SavedReply>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface SavedReplyEdge {
  cursor: string;
  node?: Maybe<SavedReply>;
}
export type SavedReplyOrder = {
  direction: OrderDirection;
  field: SavedReplyOrderField;
}
export enum SavedReplyOrderField {
  UPDATED_AT,
}
export type SearchResultItem = App | Discussion | Issue | MarketplaceListing | Organization | PullRequest | Repository | User;
export interface SearchResultItemConnection {
  codeCount: number;
  discussionCount: number;
  edges?: Maybe<Array<Maybe<SearchResultItemEdge>>>;
  issueCount: number;
  nodes?: Maybe<Array<Maybe<SearchResultItem>>>;
  pageInfo: PageInfo;
  repositoryCount: number;
  userCount: number;
  wikiCount: number;
}
export interface SearchResultItemEdge {
  cursor: string;
  node?: Maybe<SearchResultItem>;
  textMatches?: Maybe<Array<Maybe<TextMatch>>>;
}
export enum SearchType {
  DISCUSSION,
  ISSUE,
  REPOSITORY,
  USER,
}
export type SecurityAdvisory = Node &  {
  classification: SecurityAdvisoryClassification;
  cvss: CVSS;
  cwes: CWEConnection;
  databaseId?: Maybe<number>;
  description: string;
  ghsaId: string;
  id: string;
  identifiers: Array<SecurityAdvisoryIdentifier>;
  notificationsPermalink?: Maybe<URI>;
  origin: string;
  permalink?: Maybe<URI>;
  publishedAt: DateTime;
  references: Array<SecurityAdvisoryReference>;
  severity: SecurityAdvisorySeverity;
  summary: string;
  updatedAt: DateTime;
  vulnerabilities: SecurityVulnerabilityConnection;
  withdrawnAt?: Maybe<DateTime>;
}
export interface SecurityAdvisoryCwesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface SecurityAdvisoryVulnerabilitiesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  classifications: Maybe<Array<SecurityAdvisoryClassification>>;
  ecosystem: Maybe<SecurityAdvisoryEcosystem>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<SecurityVulnerabilityOrder>;
  package: Maybe<string>;
  severities: Maybe<Array<SecurityAdvisorySeverity>>;
}
export enum SecurityAdvisoryClassification {
  GENERAL,
  MALWARE,
}
export interface SecurityAdvisoryConnection {
  edges?: Maybe<Array<Maybe<SecurityAdvisoryEdge>>>;
  nodes?: Maybe<Array<Maybe<SecurityAdvisory>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export enum SecurityAdvisoryEcosystem {
  ACTIONS,
  COMPOSER,
  ERLANG,
  GO,
  MAVEN,
  NPM,
  NUGET,
  PIP,
  PUB,
  RUBYGEMS,
  RUST,
  SWIFT,
}
export interface SecurityAdvisoryEdge {
  cursor: string;
  node?: Maybe<SecurityAdvisory>;
}
export interface SecurityAdvisoryIdentifier {
  type: string;
  value: string;
}
export type SecurityAdvisoryIdentifierFilter = {
  type: SecurityAdvisoryIdentifierType;
  value: string;
}
export enum SecurityAdvisoryIdentifierType {
  CVE,
  GHSA,
}
export type SecurityAdvisoryOrder = {
  direction: OrderDirection;
  field: SecurityAdvisoryOrderField;
}
export enum SecurityAdvisoryOrderField {
  PUBLISHED_AT,
  UPDATED_AT,
}
export interface SecurityAdvisoryPackage {
  ecosystem: SecurityAdvisoryEcosystem;
  name: string;
}
export interface SecurityAdvisoryPackageVersion {
  identifier: string;
}
export interface SecurityAdvisoryReference {
  url: URI;
}
export enum SecurityAdvisorySeverity {
  CRITICAL,
  HIGH,
  LOW,
  MODERATE,
}
export interface SecurityVulnerability {
  advisory: SecurityAdvisory;
  firstPatchedVersion?: Maybe<SecurityAdvisoryPackageVersion>;
  package: SecurityAdvisoryPackage;
  severity: SecurityAdvisorySeverity;
  updatedAt: DateTime;
  vulnerableVersionRange: string;
}
export interface SecurityVulnerabilityConnection {
  edges?: Maybe<Array<Maybe<SecurityVulnerabilityEdge>>>;
  nodes?: Maybe<Array<Maybe<SecurityVulnerability>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface SecurityVulnerabilityEdge {
  cursor: string;
  node?: Maybe<SecurityVulnerability>;
}
export type SecurityVulnerabilityOrder = {
  direction: OrderDirection;
  field: SecurityVulnerabilityOrderField;
}
export enum SecurityVulnerabilityOrderField {
  UPDATED_AT,
}
export type SetEnterpriseIdentityProviderInput = {
  clientMutationId?: Maybe<string>;
  digestMethod: SamlDigestAlgorithm;
  enterpriseId: string;
  idpCertificate: string;
  issuer?: Maybe<string>;
  signatureMethod: SamlSignatureAlgorithm;
  ssoUrl: URI;
}
export interface SetEnterpriseIdentityProviderPayload {
  clientMutationId?: Maybe<string>;
  identityProvider?: Maybe<EnterpriseIdentityProvider>;
}
export type SetOrganizationInteractionLimitInput = {
  clientMutationId?: Maybe<string>;
  expiry?: Maybe<RepositoryInteractionLimitExpiry>;
  limit: RepositoryInteractionLimit;
  organizationId: string;
}
export interface SetOrganizationInteractionLimitPayload {
  clientMutationId?: Maybe<string>;
  organization?: Maybe<Organization>;
}
export type SetRepositoryInteractionLimitInput = {
  clientMutationId?: Maybe<string>;
  expiry?: Maybe<RepositoryInteractionLimitExpiry>;
  limit: RepositoryInteractionLimit;
  repositoryId: string;
}
export interface SetRepositoryInteractionLimitPayload {
  clientMutationId?: Maybe<string>;
  repository?: Maybe<Repository>;
}
export type SetUserInteractionLimitInput = {
  clientMutationId?: Maybe<string>;
  expiry?: Maybe<RepositoryInteractionLimitExpiry>;
  limit: RepositoryInteractionLimit;
  userId: string;
}
export interface SetUserInteractionLimitPayload {
  clientMutationId?: Maybe<string>;
  user?: Maybe<User>;
}
export type SmimeSignature = GitSignature &  {
  email: string;
  isValid: Boolean;
  payload: string;
  signature: string;
  signer?: Maybe<User>;
  state: GitSignatureState;
  wasSignedByGitHub: Boolean;
}
export interface SocialAccount {
  displayName: string;
  provider: SocialAccountProvider;
  url: URI;
}
export interface SocialAccountConnection {
  edges?: Maybe<Array<Maybe<SocialAccountEdge>>>;
  nodes?: Maybe<Array<Maybe<SocialAccount>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface SocialAccountEdge {
  cursor: string;
  node?: Maybe<SocialAccount>;
}
export enum SocialAccountProvider {
  FACEBOOK,
  GENERIC,
  HOMETOWN,
  INSTAGRAM,
  LINKEDIN,
  MASTODON,
  REDDIT,
  TWITCH,
  TWITTER,
  YOUTUBE,
}
export type Sponsor = Organization | User;
export interface SponsorConnection {
  edges?: Maybe<Array<Maybe<SponsorEdge>>>;
  nodes?: Maybe<Array<Maybe<Sponsor>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface SponsorEdge {
  cursor: string;
  node?: Maybe<Sponsor>;
}
export type SponsorOrder = {
  direction: OrderDirection;
  field: SponsorOrderField;
}
export enum SponsorOrderField {
  LOGIN,
  RELEVANCE,
}
export interface Sponsorable {
  estimatedNextSponsorsPayoutInCents: number;
  hasSponsorsListing: Boolean;
  isSponsoredBy: Boolean;
  isSponsoringViewer: Boolean;
  monthlyEstimatedSponsorsIncomeInCents: number;
  sponsoring: SponsorConnection;
  sponsors: SponsorConnection;
  sponsorsActivities: SponsorsActivityConnection;
  sponsorsListing?: Maybe<SponsorsListing>;
  sponsorshipForViewerAsSponsor?: Maybe<Sponsorship>;
  sponsorshipForViewerAsSponsorable?: Maybe<Sponsorship>;
  sponsorshipNewsletters: SponsorshipNewsletterConnection;
  sponsorshipsAsMaintainer: SponsorshipConnection;
  sponsorshipsAsSponsor: SponsorshipConnection;
  totalSponsorshipAmountAsSponsorInCents?: Maybe<number>;
  viewerCanSponsor: Boolean;
  viewerIsSponsoring: Boolean;
}
export type SponsorableItem = Organization | User;
export interface SponsorableItemConnection {
  edges?: Maybe<Array<Maybe<SponsorableItemEdge>>>;
  nodes?: Maybe<Array<Maybe<SponsorableItem>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface SponsorableIsSponsoredByArgs{
  accountLogin: string;
}
export interface SponsorableSponsoringArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<SponsorOrder>;
}
export interface SponsorableSponsorsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<SponsorOrder>;
  tierId: Maybe<string>;
}
export interface SponsorableSponsorsActivitiesArgs{
  actions: Maybe<Array<SponsorsActivityAction>>;
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  includeAsSponsor: Maybe<Boolean>;
  includePrivate: Maybe<Boolean>;
  last: Maybe<number>;
  orderBy: Maybe<SponsorsActivityOrder>;
  period: Maybe<SponsorsActivityPeriod>;
  since: Maybe<DateTime>;
  until: Maybe<DateTime>;
}
export interface SponsorableSponsorshipForViewerAsSponsorArgs{
  activeOnly: Maybe<Boolean>;
}
export interface SponsorableSponsorshipForViewerAsSponsorableArgs{
  activeOnly: Maybe<Boolean>;
}
export interface SponsorableSponsorshipNewslettersArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<SponsorshipNewsletterOrder>;
}
export interface SponsorableSponsorshipsAsMaintainerArgs{
  activeOnly: Maybe<Boolean>;
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  includePrivate: Maybe<Boolean>;
  last: Maybe<number>;
  orderBy: Maybe<SponsorshipOrder>;
}
export interface SponsorableSponsorshipsAsSponsorArgs{
  activeOnly: Maybe<Boolean>;
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  maintainerLogins: Maybe<Array<string>>;
  orderBy: Maybe<SponsorshipOrder>;
}
export interface SponsorableTotalSponsorshipAmountAsSponsorInCentsArgs{
  since: Maybe<DateTime>;
  sponsorableLogins: Maybe<Array<string>>;
  until: Maybe<DateTime>;
}
export interface SponsorableItemEdge {
  cursor: string;
  node?: Maybe<SponsorableItem>;
}
export type SponsorableOrder = {
  direction: OrderDirection;
  field: SponsorableOrderField;
}
export enum SponsorableOrderField {
  LOGIN,
}
export type SponsorsActivity = Node &  {
  action: SponsorsActivityAction;
  currentPrivacyLevel?: Maybe<SponsorshipPrivacy>;
  id: string;
  previousSponsorsTier?: Maybe<SponsorsTier>;
  sponsor?: Maybe<Sponsor>;
  sponsorable: Sponsorable;
  sponsorsTier?: Maybe<SponsorsTier>;
  timestamp?: Maybe<DateTime>;
  viaBulkSponsorship: Boolean;
}
export enum SponsorsActivityAction {
  CANCELLED_SPONSORSHIP,
  NEW_SPONSORSHIP,
  PENDING_CHANGE,
  REFUND,
  SPONSOR_MATCH_DISABLED,
  TIER_CHANGE,
}
export interface SponsorsActivityConnection {
  edges?: Maybe<Array<Maybe<SponsorsActivityEdge>>>;
  nodes?: Maybe<Array<Maybe<SponsorsActivity>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface SponsorsActivityEdge {
  cursor: string;
  node?: Maybe<SponsorsActivity>;
}
export type SponsorsActivityOrder = {
  direction: OrderDirection;
  field: SponsorsActivityOrderField;
}
export enum SponsorsActivityOrderField {
  TIMESTAMP,
}
export enum SponsorsActivityPeriod {
  ALL,
  DAY,
  MONTH,
  WEEK,
}
export enum SponsorsCountryOrRegionCode {
  AD,
  AE,
  AF,
  AG,
  AI,
  AL,
  AM,
  AO,
  AQ,
  AR,
  AS,
  AT,
  AU,
  AW,
  AX,
  AZ,
  BA,
  BB,
  BD,
  BE,
  BF,
  BG,
  BH,
  BI,
  BJ,
  BL,
  BM,
  BN,
  BO,
  BQ,
  BR,
  BS,
  BT,
  BV,
  BW,
  BY,
  BZ,
  CA,
  CC,
  CD,
  CF,
  CG,
  CH,
  CI,
  CK,
  CL,
  CM,
  CN,
  CO,
  CR,
  CV,
  CW,
  CX,
  CY,
  CZ,
  DE,
  DJ,
  DK,
  DM,
  DO,
  DZ,
  EC,
  EE,
  EG,
  EH,
  ER,
  ES,
  ET,
  FI,
  FJ,
  FK,
  FM,
  FO,
  FR,
  GA,
  GB,
  GD,
  GE,
  GF,
  GG,
  GH,
  GI,
  GL,
  GM,
  GN,
  GP,
  GQ,
  GR,
  GS,
  GT,
  GU,
  GW,
  GY,
  HK,
  HM,
  HN,
  HR,
  HT,
  HU,
  ID,
  IE,
  IL,
  IM,
  IN,
  IO,
  IQ,
  IR,
  IS,
  IT,
  JE,
  JM,
  JO,
  JP,
  KE,
  KG,
  KH,
  KI,
  KM,
  KN,
  KR,
  KW,
  KY,
  KZ,
  LA,
  LB,
  LC,
  LI,
  LK,
  LR,
  LS,
  LT,
  LU,
  LV,
  LY,
  MA,
  MC,
  MD,
  ME,
  MF,
  MG,
  MH,
  MK,
  ML,
  MM,
  MN,
  MO,
  MP,
  MQ,
  MR,
  MS,
  MT,
  MU,
  MV,
  MW,
  MX,
  MY,
  MZ,
  NA,
  NC,
  NE,
  NF,
  NG,
  NI,
  NL,
  NO,
  NP,
  NR,
  NU,
  NZ,
  OM,
  PA,
  PE,
  PF,
  PG,
  PH,
  PK,
  PL,
  PM,
  PN,
  PR,
  PS,
  PT,
  PW,
  PY,
  QA,
  RE,
  RO,
  RS,
  RU,
  RW,
  SA,
  SB,
  SC,
  SD,
  SE,
  SG,
  SH,
  SI,
  SJ,
  SK,
  SL,
  SM,
  SN,
  SO,
  SR,
  SS,
  ST,
  SV,
  SX,
  SZ,
  TC,
  TD,
  TF,
  TG,
  TH,
  TJ,
  TK,
  TL,
  TM,
  TN,
  TO,
  TR,
  TT,
  TV,
  TW,
  TZ,
  UA,
  UG,
  UM,
  US,
  UY,
  UZ,
  VA,
  VC,
  VE,
  VG,
  VI,
  VN,
  VU,
  WF,
  WS,
  YE,
  YT,
  ZA,
  ZM,
  ZW,
}
export interface SponsorsGoal {
  description?: Maybe<string>;
  kind: SponsorsGoalKind;
  percentComplete: number;
  targetValue: number;
  title: string;
}
export enum SponsorsGoalKind {
  MONTHLY_SPONSORSHIP_AMOUNT,
  TOTAL_SPONSORS_COUNT,
}
export type SponsorsListing = Node &  {
  activeGoal?: Maybe<SponsorsGoal>;
  activeStripeConnectAccount?: Maybe<StripeConnectAccount>;
  billingCountryOrRegion?: Maybe<string>;
  contactEmailAddress?: Maybe<string>;
  createdAt: DateTime;
  dashboardResourcePath: URI;
  dashboardUrl: URI;
  featuredItems: Array<SponsorsListingFeaturedItem>;
  fiscalHost?: Maybe<Organization>;
  fullDescription: string;
  fullDescriptionHTML: HTML;
  id: string;
  isPublic: Boolean;
  name: string;
  nextPayoutDate?: Maybe<Date>;
  residenceCountryOrRegion?: Maybe<string>;
  resourcePath: URI;
  shortDescription: string;
  slug: string;
  sponsorable: Sponsorable;
  tiers?: Maybe<SponsorsTierConnection>;
  url: URI;
}
export interface SponsorsListingFeaturedItemsArgs{
  featureableTypes: Maybe<Array<SponsorsListingFeaturedItemFeatureableType>>;
}
export interface SponsorsListingTiersArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  includeUnpublished: Maybe<Boolean>;
  last: Maybe<number>;
  orderBy: Maybe<SponsorsTierOrder>;
}
export type SponsorsListingFeatureableItem = Repository | User;
export type SponsorsListingFeaturedItem = Node &  {
  createdAt: DateTime;
  description?: Maybe<string>;
  featureable: SponsorsListingFeatureableItem;
  id: string;
  position: number;
  sponsorsListing: SponsorsListing;
  updatedAt: DateTime;
}
export enum SponsorsListingFeaturedItemFeatureableType {
  REPOSITORY,
  USER,
}
export type SponsorsTier = Node &  {
  adminInfo?: Maybe<SponsorsTierAdminInfo>;
  closestLesserValueTier?: Maybe<SponsorsTier>;
  createdAt: DateTime;
  description: string;
  descriptionHTML: HTML;
  id: string;
  isCustomAmount: Boolean;
  isOneTime: Boolean;
  monthlyPriceInCents: number;
  monthlyPriceInDollars: number;
  name: string;
  sponsorsListing: SponsorsListing;
  updatedAt: DateTime;
}
export interface SponsorsTierAdminInfo {
  isDraft: Boolean;
  isPublished: Boolean;
  isRetired: Boolean;
  sponsorships: SponsorshipConnection;
}
export interface SponsorsTierAdminInfoSponsorshipsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  includePrivate: Maybe<Boolean>;
  last: Maybe<number>;
  orderBy: Maybe<SponsorshipOrder>;
}
export interface SponsorsTierConnection {
  edges?: Maybe<Array<Maybe<SponsorsTierEdge>>>;
  nodes?: Maybe<Array<Maybe<SponsorsTier>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface SponsorsTierEdge {
  cursor: string;
  node?: Maybe<SponsorsTier>;
}
export type SponsorsTierOrder = {
  direction: OrderDirection;
  field: SponsorsTierOrderField;
}
export enum SponsorsTierOrderField {
  CREATED_AT,
  MONTHLY_PRICE_IN_CENTS,
}
export type Sponsorship = Node &  {
  createdAt: DateTime;
  id: string;
  isActive: Boolean;
  isOneTimePayment: Boolean;
  isSponsorOptedIntoEmail?: Maybe<Boolean>;
  maintainer: User;
  privacyLevel: SponsorshipPrivacy;
  sponsor?: Maybe<User>;
  sponsorEntity?: Maybe<Sponsor>;
  sponsorable: Sponsorable;
  tier?: Maybe<SponsorsTier>;
  tierSelectedAt?: Maybe<DateTime>;
}
export interface SponsorshipConnection {
  edges?: Maybe<Array<Maybe<SponsorshipEdge>>>;
  nodes?: Maybe<Array<Maybe<Sponsorship>>>;
  pageInfo: PageInfo;
  totalCount: number;
  totalRecurringMonthlyPriceInCents: number;
  totalRecurringMonthlyPriceInDollars: number;
}
export interface SponsorshipEdge {
  cursor: string;
  node?: Maybe<Sponsorship>;
}
export type SponsorshipNewsletter = Node &  {
  author?: Maybe<User>;
  body: string;
  createdAt: DateTime;
  id: string;
  isPublished: Boolean;
  sponsorable: Sponsorable;
  subject: string;
  updatedAt: DateTime;
}
export interface SponsorshipNewsletterConnection {
  edges?: Maybe<Array<Maybe<SponsorshipNewsletterEdge>>>;
  nodes?: Maybe<Array<Maybe<SponsorshipNewsletter>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface SponsorshipNewsletterEdge {
  cursor: string;
  node?: Maybe<SponsorshipNewsletter>;
}
export type SponsorshipNewsletterOrder = {
  direction: OrderDirection;
  field: SponsorshipNewsletterOrderField;
}
export enum SponsorshipNewsletterOrderField {
  CREATED_AT,
}
export type SponsorshipOrder = {
  direction: OrderDirection;
  field: SponsorshipOrderField;
}
export enum SponsorshipOrderField {
  CREATED_AT,
}
export enum SponsorshipPrivacy {
  PRIVATE,
  PUBLIC,
}
export enum SquashMergeCommitMessage {
  BLANK,
  COMMIT_MESSAGES,
  PR_BODY,
}
export enum SquashMergeCommitTitle {
  COMMIT_OR_PR_TITLE,
  PR_TITLE,
}
export type SshSignature = GitSignature &  {
  email: string;
  isValid: Boolean;
  keyFingerprint?: Maybe<string>;
  payload: string;
  signature: string;
  signer?: Maybe<User>;
  state: GitSignatureState;
  wasSignedByGitHub: Boolean;
}
export type StarOrder = {
  direction: OrderDirection;
  field: StarOrderField;
}
export enum StarOrderField {
  STARRED_AT,
}
export interface StargazerConnection {
  edges?: Maybe<Array<Maybe<StargazerEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface StargazerEdge {
  cursor: string;
  node: User;
  starredAt: DateTime;
}
export interface Starrable {
  id: string;
  stargazerCount: number;
  stargazers: StargazerConnection;
  viewerHasStarred: Boolean;
}
export interface StarredRepositoryConnection {
  edges?: Maybe<Array<Maybe<StarredRepositoryEdge>>>;
  isOverLimit: Boolean;
  nodes?: Maybe<Array<Maybe<Repository>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface StarrableStargazersArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<StarOrder>;
}
export interface StarredRepositoryEdge {
  cursor: string;
  node: Repository;
  starredAt: DateTime;
}
export type StartOrganizationMigrationInput = {
  clientMutationId?: Maybe<string>;
  sourceAccessToken: string;
  sourceOrgUrl: URI;
  targetEnterpriseId: string;
  targetOrgName: string;
}
export interface StartOrganizationMigrationPayload {
  clientMutationId?: Maybe<string>;
  orgMigration?: Maybe<OrganizationMigration>;
}
export type StartRepositoryMigrationInput = {
  accessToken?: Maybe<string>;
  clientMutationId?: Maybe<string>;
  continueOnError?: Maybe<Boolean>;
  gitArchiveUrl?: Maybe<string>;
  githubPat?: Maybe<string>;
  lockSource?: Maybe<Boolean>;
  metadataArchiveUrl?: Maybe<string>;
  ownerId: string;
  repositoryName: string;
  skipReleases?: Maybe<Boolean>;
  sourceId: string;
  sourceRepositoryUrl?: Maybe<URI>;
  targetRepoVisibility?: Maybe<string>;
}
export interface StartRepositoryMigrationPayload {
  clientMutationId?: Maybe<string>;
  repositoryMigration?: Maybe<RepositoryMigration>;
}
export type Status = Node &  {
  combinedContexts: StatusCheckRollupContextConnection;
  commit?: Maybe<Commit>;
  context?: Maybe<StatusContext>;
  contexts: Array<StatusContext>;
  id: string;
  state: StatusState;
}
export interface StatusCombinedContextsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface StatusContextArgs{
  name: string;
}
export interface StatusCheckConfiguration {
  context: string;
  integrationId?: Maybe<number>;
}
export type StatusCheckConfigurationInput = {
  context: string;
  integrationId?: Maybe<number>;
}
export type StatusCheckRollup = Node &  {
  commit?: Maybe<Commit>;
  contexts: StatusCheckRollupContextConnection;
  id: string;
  state: StatusState;
}
export interface StatusCheckRollupContextsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export type StatusCheckRollupContext = CheckRun | StatusContext;
export interface StatusCheckRollupContextConnection {
  checkRunCount: number;
  checkRunCountsByState?: Maybe<Array<CheckRunStateCount>>;
  edges?: Maybe<Array<Maybe<StatusCheckRollupContextEdge>>>;
  nodes?: Maybe<Array<Maybe<StatusCheckRollupContext>>>;
  pageInfo: PageInfo;
  statusContextCount: number;
  statusContextCountsByState?: Maybe<Array<StatusContextStateCount>>;
  totalCount: number;
}
export interface StatusCheckRollupContextEdge {
  cursor: string;
  node?: Maybe<StatusCheckRollupContext>;
}
export type StatusContext = Node & RequirableByPullRequest &  {
  avatarUrl?: Maybe<URI>;
  commit?: Maybe<Commit>;
  context: string;
  createdAt: DateTime;
  creator?: Maybe<Actor>;
  description?: Maybe<string>;
  id: string;
  isRequired: Boolean;
  state: StatusState;
  targetUrl?: Maybe<URI>;
}
export interface StatusContextAvatarUrlArgs{
  size: Maybe<number>;
}
export interface StatusContextIsRequiredArgs{
  pullRequestId: Maybe<string>;
  pullRequestNumber: Maybe<number>;
}
export interface StatusContextStateCount {
  count: number;
  state: StatusState;
}
export enum StatusState {
  ERROR,
  EXPECTED,
  FAILURE,
  PENDING,
  SUCCESS,
}
export interface StripeConnectAccount {
  accountId: string;
  billingCountryOrRegion?: Maybe<string>;
  countryOrRegion?: Maybe<string>;
  isActive: Boolean;
  sponsorsListing: SponsorsListing;
  stripeDashboardUrl: URI;
}
export type SubmitPullRequestReviewInput = {
  body?: Maybe<string>;
  clientMutationId?: Maybe<string>;
  event: PullRequestReviewEvent;
  pullRequestId?: Maybe<string>;
  pullRequestReviewId?: Maybe<string>;
}
export interface SubmitPullRequestReviewPayload {
  clientMutationId?: Maybe<string>;
  pullRequestReview?: Maybe<PullRequestReview>;
}
export interface Submodule {
  branch?: Maybe<string>;
  gitUrl: URI;
  name: string;
  nameRaw: Base64String;
  path: string;
  pathRaw: Base64String;
  subprojectCommitOid?: Maybe<GitObjectID>;
}
export interface SubmoduleConnection {
  edges?: Maybe<Array<Maybe<SubmoduleEdge>>>;
  nodes?: Maybe<Array<Maybe<Submodule>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface SubmoduleEdge {
  cursor: string;
  node?: Maybe<Submodule>;
}
export interface Subscribable {
  id: string;
  viewerCanSubscribe: Boolean;
  viewerSubscription?: Maybe<SubscriptionState>;
}
export interface SubscribableThread {
  id: string;
  viewerThreadSubscriptionFormAction?: Maybe<ThreadSubscriptionFormAction>;
  viewerThreadSubscriptionStatus?: Maybe<ThreadSubscriptionState>;
}
export type SubscribedEvent = Node &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  id: string;
  subscribable: Subscribable;
}
export enum SubscriptionState {
  IGNORED,
  SUBSCRIBED,
  UNSUBSCRIBED,
}
export interface SuggestedReviewer {
  isAuthor: Boolean;
  isCommenter: Boolean;
  reviewer: User;
}
export type Tag = GitObject & Node &  {
  abbreviatedOid: string;
  commitResourcePath: URI;
  commitUrl: URI;
  id: string;
  message?: Maybe<string>;
  name: string;
  oid: GitObjectID;
  repository: Repository;
  tagger?: Maybe<GitActor>;
  target: GitObject;
}
export interface TagNamePatternParameters {
  name?: Maybe<string>;
  negate: Boolean;
  operator: string;
  pattern: string;
}
export type TagNamePatternParametersInput = {
  name?: Maybe<string>;
  negate?: Maybe<Boolean>;
  operator: string;
  pattern: string;
}
export type Team = MemberStatusable & Node & Subscribable &  {
  ancestors: TeamConnection;
  avatarUrl?: Maybe<URI>;
  childTeams: TeamConnection;
  combinedSlug: string;
  createdAt: DateTime;
  databaseId?: Maybe<number>;
  description?: Maybe<string>;
  discussion?: Maybe<TeamDiscussion>;
  discussions: TeamDiscussionConnection;
  discussionsResourcePath: URI;
  discussionsUrl: URI;
  editTeamResourcePath: URI;
  editTeamUrl: URI;
  id: string;
  invitations?: Maybe<OrganizationInvitationConnection>;
  memberStatuses: UserStatusConnection;
  members: TeamMemberConnection;
  membersResourcePath: URI;
  membersUrl: URI;
  name: string;
  newTeamResourcePath: URI;
  newTeamUrl: URI;
  notificationSetting: TeamNotificationSetting;
  organization: Organization;
  parentTeam?: Maybe<Team>;
  privacy: TeamPrivacy;
  projectV2?: Maybe<ProjectV2>;
  projectsV2: ProjectV2Connection;
  repositories: TeamRepositoryConnection;
  repositoriesResourcePath: URI;
  repositoriesUrl: URI;
  resourcePath: URI;
  reviewRequestDelegationAlgorithm?: Maybe<TeamReviewAssignmentAlgorithm>;
  reviewRequestDelegationEnabled: Boolean;
  reviewRequestDelegationMemberCount?: Maybe<number>;
  reviewRequestDelegationNotifyTeam: Boolean;
  slug: string;
  teamsResourcePath: URI;
  teamsUrl: URI;
  updatedAt: DateTime;
  url: URI;
  viewerCanAdminister: Boolean;
  viewerCanSubscribe: Boolean;
  viewerSubscription?: Maybe<SubscriptionState>;
}
export interface TeamAncestorsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface TeamAvatarUrlArgs{
  size: Maybe<number>;
}
export interface TeamChildTeamsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  immediateOnly: Maybe<Boolean>;
  last: Maybe<number>;
  orderBy: Maybe<TeamOrder>;
  userLogins: Maybe<Array<string>>;
}
export interface TeamDiscussionArgs{
  number: number;
}
export interface TeamDiscussionsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  isPinned: Maybe<Boolean>;
  last: Maybe<number>;
  orderBy: Maybe<TeamDiscussionOrder>;
}
export interface TeamInvitationsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface TeamMemberStatusesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<UserStatusOrder>;
}
export interface TeamMembersArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  membership: Maybe<TeamMembershipType>;
  orderBy: Maybe<TeamMemberOrder>;
  query: Maybe<string>;
  role: Maybe<TeamMemberRole>;
}
export interface TeamProjectV2Args{
  number: number;
}
export interface TeamProjectsV2Args{
  after: Maybe<string>;
  before: Maybe<string>;
  filterBy: Maybe<ProjectV2Filters>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ProjectV2Order>;
  query: Maybe<string>;
}
export interface TeamRepositoriesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<TeamRepositoryOrder>;
  query: Maybe<string>;
}
export type TeamAddMemberAuditEntry = AuditEntry & Node & OrganizationAuditEntryData & TeamAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  isLdapMapped?: Maybe<Boolean>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  team?: Maybe<Team>;
  teamName?: Maybe<string>;
  teamResourcePath?: Maybe<URI>;
  teamUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type TeamAddRepositoryAuditEntry = AuditEntry & Node & OrganizationAuditEntryData & RepositoryAuditEntryData & TeamAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  isLdapMapped?: Maybe<Boolean>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<string>;
  repositoryResourcePath?: Maybe<URI>;
  repositoryUrl?: Maybe<URI>;
  team?: Maybe<Team>;
  teamName?: Maybe<string>;
  teamResourcePath?: Maybe<URI>;
  teamUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export interface TeamAuditEntryData {
  team?: Maybe<Team>;
  teamName?: Maybe<string>;
  teamResourcePath?: Maybe<URI>;
  teamUrl?: Maybe<URI>;
}
export type TeamChangeParentTeamAuditEntry = AuditEntry & Node & OrganizationAuditEntryData & TeamAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  isLdapMapped?: Maybe<Boolean>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  parentTeam?: Maybe<Team>;
  parentTeamName?: Maybe<string>;
  parentTeamNameWas?: Maybe<string>;
  parentTeamResourcePath?: Maybe<URI>;
  parentTeamUrl?: Maybe<URI>;
  parentTeamWas?: Maybe<Team>;
  parentTeamWasResourcePath?: Maybe<URI>;
  parentTeamWasUrl?: Maybe<URI>;
  team?: Maybe<Team>;
  teamName?: Maybe<string>;
  teamResourcePath?: Maybe<URI>;
  teamUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export interface TeamConnection {
  edges?: Maybe<Array<Maybe<TeamEdge>>>;
  nodes?: Maybe<Array<Maybe<Team>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export type TeamDiscussion = Comment & Deletable & Node & Reactable & Subscribable & UniformResourceLocatable & Updatable & UpdatableComment &  {
  author?: Maybe<Actor>;
  authorAssociation: CommentAuthorAssociation;
  body: string;
  bodyHTML: HTML;
  bodyText: string;
  bodyVersion: string;
  comments: TeamDiscussionCommentConnection;
  commentsResourcePath: URI;
  commentsUrl: URI;
  createdAt: DateTime;
  createdViaEmail: Boolean;
  databaseId?: Maybe<number>;
  editor?: Maybe<Actor>;
  id: string;
  includesCreatedEdit: Boolean;
  isPinned: Boolean;
  isPrivate: Boolean;
  lastEditedAt?: Maybe<DateTime>;
  number: number;
  publishedAt?: Maybe<DateTime>;
  reactionGroups?: Maybe<Array<ReactionGroup>>;
  reactions: ReactionConnection;
  resourcePath: URI;
  team: Team;
  title: string;
  updatedAt: DateTime;
  url: URI;
  userContentEdits?: Maybe<UserContentEditConnection>;
  viewerCanDelete: Boolean;
  viewerCanPin: Boolean;
  viewerCanReact: Boolean;
  viewerCanSubscribe: Boolean;
  viewerCanUpdate: Boolean;
  viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
  viewerDidAuthor: Boolean;
  viewerSubscription?: Maybe<SubscriptionState>;
}
export interface TeamDiscussionCommentsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  fromComment: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<TeamDiscussionCommentOrder>;
}
export interface TeamDiscussionReactionsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  content: Maybe<ReactionContent>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ReactionOrder>;
}
export interface TeamDiscussionUserContentEditsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export type TeamDiscussionComment = Comment & Deletable & Node & Reactable & UniformResourceLocatable & Updatable & UpdatableComment &  {
  author?: Maybe<Actor>;
  authorAssociation: CommentAuthorAssociation;
  body: string;
  bodyHTML: HTML;
  bodyText: string;
  bodyVersion: string;
  createdAt: DateTime;
  createdViaEmail: Boolean;
  databaseId?: Maybe<number>;
  discussion: TeamDiscussion;
  editor?: Maybe<Actor>;
  id: string;
  includesCreatedEdit: Boolean;
  lastEditedAt?: Maybe<DateTime>;
  number: number;
  publishedAt?: Maybe<DateTime>;
  reactionGroups?: Maybe<Array<ReactionGroup>>;
  reactions: ReactionConnection;
  resourcePath: URI;
  updatedAt: DateTime;
  url: URI;
  userContentEdits?: Maybe<UserContentEditConnection>;
  viewerCanDelete: Boolean;
  viewerCanReact: Boolean;
  viewerCanUpdate: Boolean;
  viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
  viewerDidAuthor: Boolean;
}
export interface TeamDiscussionCommentReactionsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  content: Maybe<ReactionContent>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ReactionOrder>;
}
export interface TeamDiscussionCommentUserContentEditsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface TeamDiscussionCommentConnection {
  edges?: Maybe<Array<Maybe<TeamDiscussionCommentEdge>>>;
  nodes?: Maybe<Array<Maybe<TeamDiscussionComment>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface TeamDiscussionCommentEdge {
  cursor: string;
  node?: Maybe<TeamDiscussionComment>;
}
export type TeamDiscussionCommentOrder = {
  direction: OrderDirection;
  field: TeamDiscussionCommentOrderField;
}
export enum TeamDiscussionCommentOrderField {
  NUMBER,
}
export interface TeamDiscussionConnection {
  edges?: Maybe<Array<Maybe<TeamDiscussionEdge>>>;
  nodes?: Maybe<Array<Maybe<TeamDiscussion>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface TeamDiscussionEdge {
  cursor: string;
  node?: Maybe<TeamDiscussion>;
}
export type TeamDiscussionOrder = {
  direction: OrderDirection;
  field: TeamDiscussionOrderField;
}
export enum TeamDiscussionOrderField {
  CREATED_AT,
}
export interface TeamEdge {
  cursor: string;
  node?: Maybe<Team>;
}
export interface TeamMemberConnection {
  edges?: Maybe<Array<Maybe<TeamMemberEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface TeamMemberEdge {
  cursor: string;
  memberAccessResourcePath: URI;
  memberAccessUrl: URI;
  node: User;
  role: TeamMemberRole;
}
export type TeamMemberOrder = {
  direction: OrderDirection;
  field: TeamMemberOrderField;
}
export enum TeamMemberOrderField {
  CREATED_AT,
  LOGIN,
}
export enum TeamMemberRole {
  MAINTAINER,
  MEMBER,
}
export enum TeamMembershipType {
  ALL,
  CHILD_TEAM,
  IMMEDIATE,
}
export enum TeamNotificationSetting {
  NOTIFICATIONS_DISABLED,
  NOTIFICATIONS_ENABLED,
}
export type TeamOrder = {
  direction: OrderDirection;
  field: TeamOrderField;
}
export enum TeamOrderField {
  NAME,
}
export enum TeamPrivacy {
  SECRET,
  VISIBLE,
}
export type TeamRemoveMemberAuditEntry = AuditEntry & Node & OrganizationAuditEntryData & TeamAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  isLdapMapped?: Maybe<Boolean>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  team?: Maybe<Team>;
  teamName?: Maybe<string>;
  teamResourcePath?: Maybe<URI>;
  teamUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export type TeamRemoveRepositoryAuditEntry = AuditEntry & Node & OrganizationAuditEntryData & RepositoryAuditEntryData & TeamAuditEntryData &  {
  action: string;
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<string>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<string>;
  actorResourcePath?: Maybe<URI>;
  actorUrl?: Maybe<URI>;
  createdAt: PreciseDateTime;
  id: string;
  isLdapMapped?: Maybe<Boolean>;
  operationType?: Maybe<OperationType>;
  organization?: Maybe<Organization>;
  organizationName?: Maybe<string>;
  organizationResourcePath?: Maybe<URI>;
  organizationUrl?: Maybe<URI>;
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<string>;
  repositoryResourcePath?: Maybe<URI>;
  repositoryUrl?: Maybe<URI>;
  team?: Maybe<Team>;
  teamName?: Maybe<string>;
  teamResourcePath?: Maybe<URI>;
  teamUrl?: Maybe<URI>;
  user?: Maybe<User>;
  userLogin?: Maybe<string>;
  userResourcePath?: Maybe<URI>;
  userUrl?: Maybe<URI>;
}
export interface TeamRepositoryConnection {
  edges?: Maybe<Array<Maybe<TeamRepositoryEdge>>>;
  nodes?: Maybe<Array<Maybe<Repository>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface TeamRepositoryEdge {
  cursor: string;
  node: Repository;
  permission: RepositoryPermission;
}
export type TeamRepositoryOrder = {
  direction: OrderDirection;
  field: TeamRepositoryOrderField;
}
export enum TeamRepositoryOrderField {
  CREATED_AT,
  NAME,
  PERMISSION,
  PUSHED_AT,
  STARGAZERS,
  UPDATED_AT,
}
export enum TeamReviewAssignmentAlgorithm {
  LOAD_BALANCE,
  ROUND_ROBIN,
}
export enum TeamRole {
  ADMIN,
  MEMBER,
}
export interface TextMatch {
  fragment: string;
  highlights: Array<TextMatchHighlight>;
  property: string;
}
export interface TextMatchHighlight {
  beginIndice: number;
  endIndice: number;
  text: string;
}
export enum ThreadSubscriptionFormAction {
  NONE,
  SUBSCRIBE,
  UNSUBSCRIBE,
}
export enum ThreadSubscriptionState {
  DISABLED,
  IGNORING_LIST,
  IGNORING_THREAD,
  NONE,
  SUBSCRIBED_TO_LIST,
  SUBSCRIBED_TO_THREAD,
  SUBSCRIBED_TO_THREAD_EVENTS,
  SUBSCRIBED_TO_THREAD_TYPE,
  UNAVAILABLE,
}
export type Topic = Node & Starrable &  {
  id: string;
  name: string;
  relatedTopics: Array<Topic>;
  repositories: RepositoryConnection;
  stargazerCount: number;
  stargazers: StargazerConnection;
  viewerHasStarred: Boolean;
}
export interface TopicRelatedTopicsArgs{
  first: Maybe<number>;
}
export interface TopicRepositoriesArgs{
  affiliations: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  hasIssuesEnabled: Maybe<Boolean>;
  isLocked: Maybe<Boolean>;
  last: Maybe<number>;
  orderBy: Maybe<RepositoryOrder>;
  ownerAffiliations: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  privacy: Maybe<RepositoryPrivacy>;
  sponsorableOnly: Maybe<Boolean>;
}
export interface TopicStargazersArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<StarOrder>;
}
export interface TopicAuditEntryData {
  topic?: Maybe<Topic>;
  topicName?: Maybe<string>;
}
export enum TopicSuggestionDeclineReason {
  NOT_RELEVANT,
  PERSONAL_PREFERENCE,
  TOO_GENERAL,
  TOO_SPECIFIC,
}
export enum TrackedIssueStates {
  CLOSED,
  OPEN,
}
export type TransferEnterpriseOrganizationInput = {
  clientMutationId?: Maybe<string>;
  destinationEnterpriseId: string;
  organizationId: string;
}
export interface TransferEnterpriseOrganizationPayload {
  clientMutationId?: Maybe<string>;
  organization?: Maybe<Organization>;
}
export type TransferIssueInput = {
  clientMutationId?: Maybe<string>;
  createLabelsIfMissing?: Maybe<Boolean>;
  issueId: string;
  repositoryId: string;
}
export interface TransferIssuePayload {
  clientMutationId?: Maybe<string>;
  issue?: Maybe<Issue>;
}
export type TransferredEvent = Node &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  fromRepository?: Maybe<Repository>;
  id: string;
  issue: Issue;
}
export type Tree = GitObject & Node &  {
  abbreviatedOid: string;
  commitResourcePath: URI;
  commitUrl: URI;
  entries?: Maybe<Array<TreeEntry>>;
  id: string;
  oid: GitObjectID;
  repository: Repository;
}
export interface TreeEntry {
  extension?: Maybe<string>;
  isGenerated: Boolean;
  language?: Maybe<Language>;
  lineCount?: Maybe<number>;
  mode: number;
  name: string;
  nameRaw: Base64String;
  object?: Maybe<GitObject>;
  oid: GitObjectID;
  path?: Maybe<string>;
  pathRaw?: Maybe<Base64String>;
  repository: Repository;
  size: number;
  submodule?: Maybe<Submodule>;
  type: string;
}
export type UnarchiveProjectV2ItemInput = {
  clientMutationId?: Maybe<string>;
  itemId: string;
  projectId: string;
}
export interface UnarchiveProjectV2ItemPayload {
  clientMutationId?: Maybe<string>;
  item?: Maybe<ProjectV2Item>;
}
export type UnarchiveRepositoryInput = {
  clientMutationId?: Maybe<string>;
  repositoryId: string;
}
export interface UnarchiveRepositoryPayload {
  clientMutationId?: Maybe<string>;
  repository?: Maybe<Repository>;
}
export type UnassignedEvent = Node &  {
  actor?: Maybe<Actor>;
  assignable: Assignable;
  assignee?: Maybe<Assignee>;
  createdAt: DateTime;
  id: string;
  user?: Maybe<User>;
}
export type UnfollowOrganizationInput = {
  clientMutationId?: Maybe<string>;
  organizationId: string;
}
export interface UnfollowOrganizationPayload {
  clientMutationId?: Maybe<string>;
  organization?: Maybe<Organization>;
}
export type UnfollowUserInput = {
  clientMutationId?: Maybe<string>;
  userId: string;
}
export interface UnfollowUserPayload {
  clientMutationId?: Maybe<string>;
  user?: Maybe<User>;
}
export interface UniformResourceLocatable {
  resourcePath: URI;
  url: URI;
}
export type UnknownSignature = GitSignature &  {
  email: string;
  isValid: Boolean;
  payload: string;
  signature: string;
  signer?: Maybe<User>;
  state: GitSignatureState;
  wasSignedByGitHub: Boolean;
}
export type UnlabeledEvent = Node &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  id: string;
  label: Label;
  labelable: Labelable;
}
export type UnlinkProjectV2FromRepositoryInput = {
  clientMutationId?: Maybe<string>;
  projectId: string;
  repositoryId: string;
}
export interface UnlinkProjectV2FromRepositoryPayload {
  clientMutationId?: Maybe<string>;
  repository?: Maybe<Repository>;
}
export type UnlinkProjectV2FromTeamInput = {
  clientMutationId?: Maybe<string>;
  projectId: string;
  teamId: string;
}
export interface UnlinkProjectV2FromTeamPayload {
  clientMutationId?: Maybe<string>;
  team?: Maybe<Team>;
}
export type UnlinkRepositoryFromProjectInput = {
  clientMutationId?: Maybe<string>;
  projectId: string;
  repositoryId: string;
}
export interface UnlinkRepositoryFromProjectPayload {
  clientMutationId?: Maybe<string>;
  project?: Maybe<Project>;
  repository?: Maybe<Repository>;
}
export type UnlockLockableInput = {
  clientMutationId?: Maybe<string>;
  lockableId: string;
}
export interface UnlockLockablePayload {
  actor?: Maybe<Actor>;
  clientMutationId?: Maybe<string>;
  unlockedRecord?: Maybe<Lockable>;
}
export type UnlockedEvent = Node &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  id: string;
  lockable: Lockable;
}
export type UnmarkDiscussionCommentAsAnswerInput = {
  clientMutationId?: Maybe<string>;
  id: string;
}
export interface UnmarkDiscussionCommentAsAnswerPayload {
  clientMutationId?: Maybe<string>;
  discussion?: Maybe<Discussion>;
}
export type UnmarkFileAsViewedInput = {
  clientMutationId?: Maybe<string>;
  path: string;
  pullRequestId: string;
}
export interface UnmarkFileAsViewedPayload {
  clientMutationId?: Maybe<string>;
  pullRequest?: Maybe<PullRequest>;
}
export type UnmarkIssueAsDuplicateInput = {
  canonicalId: string;
  clientMutationId?: Maybe<string>;
  duplicateId: string;
}
export interface UnmarkIssueAsDuplicatePayload {
  clientMutationId?: Maybe<string>;
  duplicate?: Maybe<IssueOrPullRequest>;
}
export type UnmarkProjectV2AsTemplateInput = {
  clientMutationId?: Maybe<string>;
  projectId: string;
}
export interface UnmarkProjectV2AsTemplatePayload {
  clientMutationId?: Maybe<string>;
  projectV2?: Maybe<ProjectV2>;
}
export type UnmarkedAsDuplicateEvent = Node &  {
  actor?: Maybe<Actor>;
  canonical?: Maybe<IssueOrPullRequest>;
  createdAt: DateTime;
  duplicate?: Maybe<IssueOrPullRequest>;
  id: string;
  isCrossRepository: Boolean;
}
export type UnminimizeCommentInput = {
  clientMutationId?: Maybe<string>;
  subjectId: string;
}
export interface UnminimizeCommentPayload {
  clientMutationId?: Maybe<string>;
  unminimizedComment?: Maybe<Minimizable>;
}
export type UnpinIssueInput = {
  clientMutationId?: Maybe<string>;
  issueId: string;
}
export interface UnpinIssuePayload {
  clientMutationId?: Maybe<string>;
  issue?: Maybe<Issue>;
}
export type UnpinnedEvent = Node &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  id: string;
  issue: Issue;
}
export type UnresolveReviewThreadInput = {
  clientMutationId?: Maybe<string>;
  threadId: string;
}
export interface UnresolveReviewThreadPayload {
  clientMutationId?: Maybe<string>;
  thread?: Maybe<PullRequestReviewThread>;
}
export type UnsubscribedEvent = Node &  {
  actor?: Maybe<Actor>;
  createdAt: DateTime;
  id: string;
  subscribable: Subscribable;
}
export interface Updatable {
  viewerCanUpdate: Boolean;
}
export interface UpdatableComment {
  viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
}
export type UpdateBranchProtectionRuleInput = {
  allowsDeletions?: Maybe<Boolean>;
  allowsForcePushes?: Maybe<Boolean>;
  blocksCreations?: Maybe<Boolean>;
  branchProtectionRuleId: string;
  bypassForcePushActorIds?: Maybe<Array<string>>;
  bypassPullRequestActorIds?: Maybe<Array<string>>;
  clientMutationId?: Maybe<string>;
  dismissesStaleReviews?: Maybe<Boolean>;
  isAdminEnforced?: Maybe<Boolean>;
  lockAllowsFetchAndMerge?: Maybe<Boolean>;
  lockBranch?: Maybe<Boolean>;
  pattern?: Maybe<string>;
  pushActorIds?: Maybe<Array<string>>;
  requireLastPushApproval?: Maybe<Boolean>;
  requiredApprovingReviewCount?: Maybe<number>;
  requiredDeploymentEnvironments?: Maybe<Array<string>>;
  requiredStatusCheckContexts?: Maybe<Array<string>>;
  requiredStatusChecks?: Maybe<Array<RequiredStatusCheckInput>>;
  requiresApprovingReviews?: Maybe<Boolean>;
  requiresCodeOwnerReviews?: Maybe<Boolean>;
  requiresCommitSignatures?: Maybe<Boolean>;
  requiresConversationResolution?: Maybe<Boolean>;
  requiresDeployments?: Maybe<Boolean>;
  requiresLinearHistory?: Maybe<Boolean>;
  requiresStatusChecks?: Maybe<Boolean>;
  requiresStrictStatusChecks?: Maybe<Boolean>;
  restrictsPushes?: Maybe<Boolean>;
  restrictsReviewDismissals?: Maybe<Boolean>;
  reviewDismissalActorIds?: Maybe<Array<string>>;
}
export interface UpdateBranchProtectionRulePayload {
  branchProtectionRule?: Maybe<BranchProtectionRule>;
  clientMutationId?: Maybe<string>;
}
export type UpdateCheckRunInput = {
  actions?: Maybe<Array<CheckRunAction>>;
  checkRunId: string;
  clientMutationId?: Maybe<string>;
  completedAt?: Maybe<DateTime>;
  conclusion?: Maybe<CheckConclusionState>;
  detailsUrl?: Maybe<URI>;
  externalId?: Maybe<string>;
  name?: Maybe<string>;
  output?: Maybe<CheckRunOutput>;
  repositoryId: string;
  startedAt?: Maybe<DateTime>;
  status?: Maybe<RequestableCheckStatusState>;
}
export interface UpdateCheckRunPayload {
  checkRun?: Maybe<CheckRun>;
  clientMutationId?: Maybe<string>;
}
export type UpdateCheckSuitePreferencesInput = {
  autoTriggerPreferences: Array<CheckSuiteAutoTriggerPreference>;
  clientMutationId?: Maybe<string>;
  repositoryId: string;
}
export interface UpdateCheckSuitePreferencesPayload {
  clientMutationId?: Maybe<string>;
  repository?: Maybe<Repository>;
}
export type UpdateDiscussionCommentInput = {
  body: string;
  clientMutationId?: Maybe<string>;
  commentId: string;
}
export interface UpdateDiscussionCommentPayload {
  clientMutationId?: Maybe<string>;
  comment?: Maybe<DiscussionComment>;
}
export type UpdateDiscussionInput = {
  body?: Maybe<string>;
  categoryId?: Maybe<string>;
  clientMutationId?: Maybe<string>;
  discussionId: string;
  title?: Maybe<string>;
}
export interface UpdateDiscussionPayload {
  clientMutationId?: Maybe<string>;
  discussion?: Maybe<Discussion>;
}
export type UpdateEnterpriseAdministratorRoleInput = {
  clientMutationId?: Maybe<string>;
  enterpriseId: string;
  login: string;
  role: EnterpriseAdministratorRole;
}
export interface UpdateEnterpriseAdministratorRolePayload {
  clientMutationId?: Maybe<string>;
  message?: Maybe<string>;
}
export type UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput = {
  clientMutationId?: Maybe<string>;
  enterpriseId: string;
  policyValue?: Maybe<EnterpriseAllowPrivateRepositoryForkingPolicyValue>;
  settingValue: EnterpriseEnabledDisabledSettingValue;
}
export interface UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload {
  clientMutationId?: Maybe<string>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<string>;
}
export type UpdateEnterpriseDefaultRepositoryPermissionSettingInput = {
  clientMutationId?: Maybe<string>;
  enterpriseId: string;
  settingValue: EnterpriseDefaultRepositoryPermissionSettingValue;
}
export interface UpdateEnterpriseDefaultRepositoryPermissionSettingPayload {
  clientMutationId?: Maybe<string>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<string>;
}
export type UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput = {
  clientMutationId?: Maybe<string>;
  enterpriseId: string;
  settingValue: EnterpriseEnabledDisabledSettingValue;
}
export interface UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload {
  clientMutationId?: Maybe<string>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<string>;
}
export type UpdateEnterpriseMembersCanCreateRepositoriesSettingInput = {
  clientMutationId?: Maybe<string>;
  enterpriseId: string;
  membersCanCreateInternalRepositories?: Maybe<Boolean>;
  membersCanCreatePrivateRepositories?: Maybe<Boolean>;
  membersCanCreatePublicRepositories?: Maybe<Boolean>;
  membersCanCreateRepositoriesPolicyEnabled?: Maybe<Boolean>;
  settingValue?: Maybe<EnterpriseMembersCanCreateRepositoriesSettingValue>;
}
export interface UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload {
  clientMutationId?: Maybe<string>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<string>;
}
export type UpdateEnterpriseMembersCanDeleteIssuesSettingInput = {
  clientMutationId?: Maybe<string>;
  enterpriseId: string;
  settingValue: EnterpriseEnabledDisabledSettingValue;
}
export interface UpdateEnterpriseMembersCanDeleteIssuesSettingPayload {
  clientMutationId?: Maybe<string>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<string>;
}
export type UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput = {
  clientMutationId?: Maybe<string>;
  enterpriseId: string;
  settingValue: EnterpriseEnabledDisabledSettingValue;
}
export interface UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload {
  clientMutationId?: Maybe<string>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<string>;
}
export type UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput = {
  clientMutationId?: Maybe<string>;
  enterpriseId: string;
  settingValue: EnterpriseEnabledDisabledSettingValue;
}
export interface UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload {
  clientMutationId?: Maybe<string>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<string>;
}
export type UpdateEnterpriseMembersCanMakePurchasesSettingInput = {
  clientMutationId?: Maybe<string>;
  enterpriseId: string;
  settingValue: EnterpriseMembersCanMakePurchasesSettingValue;
}
export interface UpdateEnterpriseMembersCanMakePurchasesSettingPayload {
  clientMutationId?: Maybe<string>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<string>;
}
export type UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput = {
  clientMutationId?: Maybe<string>;
  enterpriseId: string;
  settingValue: EnterpriseEnabledDisabledSettingValue;
}
export interface UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload {
  clientMutationId?: Maybe<string>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<string>;
}
export type UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput = {
  clientMutationId?: Maybe<string>;
  enterpriseId: string;
  settingValue: EnterpriseEnabledDisabledSettingValue;
}
export interface UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload {
  clientMutationId?: Maybe<string>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<string>;
}
export type UpdateEnterpriseOrganizationProjectsSettingInput = {
  clientMutationId?: Maybe<string>;
  enterpriseId: string;
  settingValue: EnterpriseEnabledDisabledSettingValue;
}
export interface UpdateEnterpriseOrganizationProjectsSettingPayload {
  clientMutationId?: Maybe<string>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<string>;
}
export type UpdateEnterpriseOwnerOrganizationRoleInput = {
  clientMutationId?: Maybe<string>;
  enterpriseId: string;
  organizationId: string;
  organizationRole: RoleInOrganization;
}
export interface UpdateEnterpriseOwnerOrganizationRolePayload {
  clientMutationId?: Maybe<string>;
  message?: Maybe<string>;
}
export type UpdateEnterpriseProfileInput = {
  clientMutationId?: Maybe<string>;
  description?: Maybe<string>;
  enterpriseId: string;
  location?: Maybe<string>;
  name?: Maybe<string>;
  websiteUrl?: Maybe<string>;
}
export interface UpdateEnterpriseProfilePayload {
  clientMutationId?: Maybe<string>;
  enterprise?: Maybe<Enterprise>;
}
export type UpdateEnterpriseRepositoryProjectsSettingInput = {
  clientMutationId?: Maybe<string>;
  enterpriseId: string;
  settingValue: EnterpriseEnabledDisabledSettingValue;
}
export interface UpdateEnterpriseRepositoryProjectsSettingPayload {
  clientMutationId?: Maybe<string>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<string>;
}
export type UpdateEnterpriseTeamDiscussionsSettingInput = {
  clientMutationId?: Maybe<string>;
  enterpriseId: string;
  settingValue: EnterpriseEnabledDisabledSettingValue;
}
export interface UpdateEnterpriseTeamDiscussionsSettingPayload {
  clientMutationId?: Maybe<string>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<string>;
}
export type UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput = {
  clientMutationId?: Maybe<string>;
  enterpriseId: string;
  settingValue: EnterpriseEnabledSettingValue;
}
export interface UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload {
  clientMutationId?: Maybe<string>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<string>;
}
export type UpdateEnvironmentInput = {
  clientMutationId?: Maybe<string>;
  environmentId: string;
  reviewers?: Maybe<Array<string>>;
  waitTimer?: Maybe<number>;
}
export interface UpdateEnvironmentPayload {
  clientMutationId?: Maybe<string>;
  environment?: Maybe<Environment>;
}
export type UpdateIpAllowListEnabledSettingInput = {
  clientMutationId?: Maybe<string>;
  ownerId: string;
  settingValue: IpAllowListEnabledSettingValue;
}
export interface UpdateIpAllowListEnabledSettingPayload {
  clientMutationId?: Maybe<string>;
  owner?: Maybe<IpAllowListOwner>;
}
export type UpdateIpAllowListEntryInput = {
  allowListValue: string;
  clientMutationId?: Maybe<string>;
  ipAllowListEntryId: string;
  isActive: Boolean;
  name?: Maybe<string>;
}
export interface UpdateIpAllowListEntryPayload {
  clientMutationId?: Maybe<string>;
  ipAllowListEntry?: Maybe<IpAllowListEntry>;
}
export type UpdateIpAllowListForInstalledAppsEnabledSettingInput = {
  clientMutationId?: Maybe<string>;
  ownerId: string;
  settingValue: IpAllowListForInstalledAppsEnabledSettingValue;
}
export interface UpdateIpAllowListForInstalledAppsEnabledSettingPayload {
  clientMutationId?: Maybe<string>;
  owner?: Maybe<IpAllowListOwner>;
}
export type UpdateIssueCommentInput = {
  body: string;
  clientMutationId?: Maybe<string>;
  id: string;
}
export interface UpdateIssueCommentPayload {
  clientMutationId?: Maybe<string>;
  issueComment?: Maybe<IssueComment>;
}
export type UpdateIssueInput = {
  assigneeIds?: Maybe<Array<string>>;
  body?: Maybe<string>;
  clientMutationId?: Maybe<string>;
  id: string;
  labelIds?: Maybe<Array<string>>;
  milestoneId?: Maybe<string>;
  projectIds?: Maybe<Array<string>>;
  state?: Maybe<IssueState>;
  title?: Maybe<string>;
}
export interface UpdateIssuePayload {
  actor?: Maybe<Actor>;
  clientMutationId?: Maybe<string>;
  issue?: Maybe<Issue>;
}
export type UpdateLabelInput = {
  clientMutationId?: Maybe<string>;
  color?: Maybe<string>;
  description?: Maybe<string>;
  id: string;
  name?: Maybe<string>;
}
export interface UpdateLabelPayload {
  clientMutationId?: Maybe<string>;
  label?: Maybe<Label>;
}
export type UpdateNotificationRestrictionSettingInput = {
  clientMutationId?: Maybe<string>;
  ownerId: string;
  settingValue: NotificationRestrictionSettingValue;
}
export interface UpdateNotificationRestrictionSettingPayload {
  clientMutationId?: Maybe<string>;
  owner?: Maybe<VerifiableDomainOwner>;
}
export type UpdateOrganizationAllowPrivateRepositoryForkingSettingInput = {
  clientMutationId?: Maybe<string>;
  forkingEnabled: Boolean;
  organizationId: string;
}
export interface UpdateOrganizationAllowPrivateRepositoryForkingSettingPayload {
  clientMutationId?: Maybe<string>;
  message?: Maybe<string>;
  organization?: Maybe<Organization>;
}
export type UpdateOrganizationWebCommitSignoffSettingInput = {
  clientMutationId?: Maybe<string>;
  organizationId: string;
  webCommitSignoffRequired: Boolean;
}
export interface UpdateOrganizationWebCommitSignoffSettingPayload {
  clientMutationId?: Maybe<string>;
  message?: Maybe<string>;
  organization?: Maybe<Organization>;
}
export interface UpdateParameters {
  updateAllowsFetchAndMerge: Boolean;
}
export type UpdateParametersInput = {
  updateAllowsFetchAndMerge: Boolean;
}
export type UpdateProjectCardInput = {
  clientMutationId?: Maybe<string>;
  isArchived?: Maybe<Boolean>;
  note?: Maybe<string>;
  projectCardId: string;
}
export interface UpdateProjectCardPayload {
  clientMutationId?: Maybe<string>;
  projectCard?: Maybe<ProjectCard>;
}
export type UpdateProjectColumnInput = {
  clientMutationId?: Maybe<string>;
  name: string;
  projectColumnId: string;
}
export interface UpdateProjectColumnPayload {
  clientMutationId?: Maybe<string>;
  projectColumn?: Maybe<ProjectColumn>;
}
export type UpdateProjectInput = {
  body?: Maybe<string>;
  clientMutationId?: Maybe<string>;
  name?: Maybe<string>;
  projectId: string;
  public?: Maybe<Boolean>;
  state?: Maybe<ProjectState>;
}
export interface UpdateProjectPayload {
  clientMutationId?: Maybe<string>;
  project?: Maybe<Project>;
}
export type UpdateProjectV2CollaboratorsInput = {
  clientMutationId?: Maybe<string>;
  collaborators: Array<ProjectV2Collaborator>;
  projectId: string;
}
export interface UpdateProjectV2CollaboratorsPayload {
  clientMutationId?: Maybe<string>;
  collaborators?: Maybe<ProjectV2ActorConnection>;
}
export interface UpdateProjectV2CollaboratorsPayloadCollaboratorsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export type UpdateProjectV2DraftIssueInput = {
  assigneeIds?: Maybe<Array<string>>;
  body?: Maybe<string>;
  clientMutationId?: Maybe<string>;
  draftIssueId: string;
  title?: Maybe<string>;
}
export interface UpdateProjectV2DraftIssuePayload {
  clientMutationId?: Maybe<string>;
  draftIssue?: Maybe<DraftIssue>;
}
export type UpdateProjectV2Input = {
  clientMutationId?: Maybe<string>;
  closed?: Maybe<Boolean>;
  projectId: string;
  public?: Maybe<Boolean>;
  readme?: Maybe<string>;
  shortDescription?: Maybe<string>;
  title?: Maybe<string>;
}
export type UpdateProjectV2ItemFieldValueInput = {
  clientMutationId?: Maybe<string>;
  fieldId: string;
  itemId: string;
  projectId: string;
  value: ProjectV2FieldValue;
}
export interface UpdateProjectV2ItemFieldValuePayload {
  clientMutationId?: Maybe<string>;
  projectV2Item?: Maybe<ProjectV2Item>;
}
export type UpdateProjectV2ItemPositionInput = {
  afterId?: Maybe<string>;
  clientMutationId?: Maybe<string>;
  itemId: string;
  projectId: string;
}
export interface UpdateProjectV2ItemPositionPayload {
  clientMutationId?: Maybe<string>;
  items?: Maybe<ProjectV2ItemConnection>;
}
export interface UpdateProjectV2ItemPositionPayloadItemsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface UpdateProjectV2Payload {
  clientMutationId?: Maybe<string>;
  projectV2?: Maybe<ProjectV2>;
}
export type UpdatePullRequestBranchInput = {
  clientMutationId?: Maybe<string>;
  expectedHeadOid?: Maybe<GitObjectID>;
  pullRequestId: string;
  updateMethod?: Maybe<PullRequestBranchUpdateMethod>;
}
export interface UpdatePullRequestBranchPayload {
  clientMutationId?: Maybe<string>;
  pullRequest?: Maybe<PullRequest>;
}
export type UpdatePullRequestInput = {
  assigneeIds?: Maybe<Array<string>>;
  baseRefName?: Maybe<string>;
  body?: Maybe<string>;
  clientMutationId?: Maybe<string>;
  labelIds?: Maybe<Array<string>>;
  maintainerCanModify?: Maybe<Boolean>;
  milestoneId?: Maybe<string>;
  projectIds?: Maybe<Array<string>>;
  pullRequestId: string;
  state?: Maybe<PullRequestUpdateState>;
  title?: Maybe<string>;
}
export interface UpdatePullRequestPayload {
  actor?: Maybe<Actor>;
  clientMutationId?: Maybe<string>;
  pullRequest?: Maybe<PullRequest>;
}
export type UpdatePullRequestReviewCommentInput = {
  body: string;
  clientMutationId?: Maybe<string>;
  pullRequestReviewCommentId: string;
}
export interface UpdatePullRequestReviewCommentPayload {
  clientMutationId?: Maybe<string>;
  pullRequestReviewComment?: Maybe<PullRequestReviewComment>;
}
export type UpdatePullRequestReviewInput = {
  body: string;
  clientMutationId?: Maybe<string>;
  pullRequestReviewId: string;
}
export interface UpdatePullRequestReviewPayload {
  clientMutationId?: Maybe<string>;
  pullRequestReview?: Maybe<PullRequestReview>;
}
export type UpdateRefInput = {
  clientMutationId?: Maybe<string>;
  force?: Maybe<Boolean>;
  oid: GitObjectID;
  refId: string;
}
export interface UpdateRefPayload {
  clientMutationId?: Maybe<string>;
  ref?: Maybe<Ref>;
}
export type UpdateRefsInput = {
  clientMutationId?: Maybe<string>;
  refUpdates: Array<RefUpdate>;
  repositoryId: string;
}
export interface UpdateRefsPayload {
  clientMutationId?: Maybe<string>;
}
export type UpdateRepositoryInput = {
  clientMutationId?: Maybe<string>;
  description?: Maybe<string>;
  hasDiscussionsEnabled?: Maybe<Boolean>;
  hasIssuesEnabled?: Maybe<Boolean>;
  hasProjectsEnabled?: Maybe<Boolean>;
  hasWikiEnabled?: Maybe<Boolean>;
  homepageUrl?: Maybe<URI>;
  name?: Maybe<string>;
  repositoryId: string;
  template?: Maybe<Boolean>;
}
export interface UpdateRepositoryPayload {
  clientMutationId?: Maybe<string>;
  repository?: Maybe<Repository>;
}
export type UpdateRepositoryRulesetInput = {
  bypassActors?: Maybe<Array<RepositoryRulesetBypassActorInput>>;
  clientMutationId?: Maybe<string>;
  conditions?: Maybe<RepositoryRuleConditionsInput>;
  enforcement?: Maybe<RuleEnforcement>;
  name?: Maybe<string>;
  repositoryRulesetId: string;
  rules?: Maybe<Array<RepositoryRuleInput>>;
  target?: Maybe<RepositoryRulesetTarget>;
}
export interface UpdateRepositoryRulesetPayload {
  clientMutationId?: Maybe<string>;
  ruleset?: Maybe<RepositoryRuleset>;
}
export type UpdateRepositoryWebCommitSignoffSettingInput = {
  clientMutationId?: Maybe<string>;
  repositoryId: string;
  webCommitSignoffRequired: Boolean;
}
export interface UpdateRepositoryWebCommitSignoffSettingPayload {
  clientMutationId?: Maybe<string>;
  message?: Maybe<string>;
  repository?: Maybe<Repository>;
}
export type UpdateSponsorshipPreferencesInput = {
  clientMutationId?: Maybe<string>;
  privacyLevel?: Maybe<SponsorshipPrivacy>;
  receiveEmails?: Maybe<Boolean>;
  sponsorId?: Maybe<string>;
  sponsorLogin?: Maybe<string>;
  sponsorableId?: Maybe<string>;
  sponsorableLogin?: Maybe<string>;
}
export interface UpdateSponsorshipPreferencesPayload {
  clientMutationId?: Maybe<string>;
  sponsorship?: Maybe<Sponsorship>;
}
export type UpdateSubscriptionInput = {
  clientMutationId?: Maybe<string>;
  state: SubscriptionState;
  subscribableId: string;
}
export interface UpdateSubscriptionPayload {
  clientMutationId?: Maybe<string>;
  subscribable?: Maybe<Subscribable>;
}
export type UpdateTeamDiscussionCommentInput = {
  body: string;
  bodyVersion?: Maybe<string>;
  clientMutationId?: Maybe<string>;
  id: string;
}
export interface UpdateTeamDiscussionCommentPayload {
  clientMutationId?: Maybe<string>;
  teamDiscussionComment?: Maybe<TeamDiscussionComment>;
}
export type UpdateTeamDiscussionInput = {
  body?: Maybe<string>;
  bodyVersion?: Maybe<string>;
  clientMutationId?: Maybe<string>;
  id: string;
  pinned?: Maybe<Boolean>;
  title?: Maybe<string>;
}
export interface UpdateTeamDiscussionPayload {
  clientMutationId?: Maybe<string>;
  teamDiscussion?: Maybe<TeamDiscussion>;
}
export type UpdateTeamReviewAssignmentInput = {
  algorithm?: Maybe<TeamReviewAssignmentAlgorithm>;
  clientMutationId?: Maybe<string>;
  enabled: Boolean;
  excludedTeamMemberIds?: Maybe<Array<string>>;
  id: string;
  notifyTeam?: Maybe<Boolean>;
  teamMemberCount?: Maybe<number>;
}
export interface UpdateTeamReviewAssignmentPayload {
  clientMutationId?: Maybe<string>;
  team?: Maybe<Team>;
}
export type UpdateTeamsRepositoryInput = {
  clientMutationId?: Maybe<string>;
  permission: RepositoryPermission;
  repositoryId: string;
  teamIds: Array<string>;
}
export interface UpdateTeamsRepositoryPayload {
  clientMutationId?: Maybe<string>;
  repository?: Maybe<Repository>;
  teams?: Maybe<Array<Team>>;
}
export type UpdateTopicsInput = {
  clientMutationId?: Maybe<string>;
  repositoryId: string;
  topicNames: Array<string>;
}
export interface UpdateTopicsPayload {
  clientMutationId?: Maybe<string>;
  invalidTopicNames?: Maybe<Array<string>>;
  repository?: Maybe<Repository>;
}
export type User = Actor & Node & PackageOwner & ProfileOwner & ProjectOwner & ProjectV2Owner & ProjectV2Recent & RepositoryDiscussionAuthor & RepositoryDiscussionCommentAuthor & RepositoryOwner & Sponsorable & UniformResourceLocatable &  {
  anyPinnableItems: Boolean;
  avatarUrl: URI;
  bio?: Maybe<string>;
  bioHTML: HTML;
  canReceiveOrganizationEmailsWhenNotificationsRestricted: Boolean;
  commitComments: CommitCommentConnection;
  company?: Maybe<string>;
  companyHTML: HTML;
  contributionsCollection: ContributionsCollection;
  createdAt: DateTime;
  databaseId?: Maybe<number>;
  email: string;
  estimatedNextSponsorsPayoutInCents: number;
  followers: FollowerConnection;
  following: FollowingConnection;
  gist?: Maybe<Gist>;
  gistComments: GistCommentConnection;
  gists: GistConnection;
  hasSponsorsListing: Boolean;
  hovercard: Hovercard;
  id: string;
  interactionAbility?: Maybe<RepositoryInteractionAbility>;
  isBountyHunter: Boolean;
  isCampusExpert: Boolean;
  isDeveloperProgramMember: Boolean;
  isEmployee: Boolean;
  isFollowingViewer: Boolean;
  isGitHubStar: Boolean;
  isHireable: Boolean;
  isSiteAdmin: Boolean;
  isSponsoredBy: Boolean;
  isSponsoringViewer: Boolean;
  isViewer: Boolean;
  issueComments: IssueCommentConnection;
  issues: IssueConnection;
  itemShowcase: ProfileItemShowcase;
  location?: Maybe<string>;
  login: string;
  monthlyEstimatedSponsorsIncomeInCents: number;
  name?: Maybe<string>;
  organization?: Maybe<Organization>;
  organizationVerifiedDomainEmails: Array<string>;
  organizations: OrganizationConnection;
  packages: PackageConnection;
  pinnableItems: PinnableItemConnection;
  pinnedItems: PinnableItemConnection;
  pinnedItemsRemaining: number;
  project?: Maybe<Project>;
  projectV2?: Maybe<ProjectV2>;
  projects: ProjectConnection;
  projectsResourcePath: URI;
  projectsUrl: URI;
  projectsV2: ProjectV2Connection;
  pronouns?: Maybe<string>;
  publicKeys: PublicKeyConnection;
  pullRequests: PullRequestConnection;
  recentProjects: ProjectV2Connection;
  repositories: RepositoryConnection;
  repositoriesContributedTo: RepositoryConnection;
  repository?: Maybe<Repository>;
  repositoryDiscussionComments: DiscussionCommentConnection;
  repositoryDiscussions: DiscussionConnection;
  resourcePath: URI;
  savedReplies?: Maybe<SavedReplyConnection>;
  socialAccounts: SocialAccountConnection;
  sponsoring: SponsorConnection;
  sponsors: SponsorConnection;
  sponsorsActivities: SponsorsActivityConnection;
  sponsorsListing?: Maybe<SponsorsListing>;
  sponsorshipForViewerAsSponsor?: Maybe<Sponsorship>;
  sponsorshipForViewerAsSponsorable?: Maybe<Sponsorship>;
  sponsorshipNewsletters: SponsorshipNewsletterConnection;
  sponsorshipsAsMaintainer: SponsorshipConnection;
  sponsorshipsAsSponsor: SponsorshipConnection;
  starredRepositories: StarredRepositoryConnection;
  status?: Maybe<UserStatus>;
  topRepositories: RepositoryConnection;
  totalSponsorshipAmountAsSponsorInCents?: Maybe<number>;
  twitterUsername?: Maybe<string>;
  updatedAt: DateTime;
  url: URI;
  viewerCanChangePinnedItems: Boolean;
  viewerCanCreateProjects: Boolean;
  viewerCanFollow: Boolean;
  viewerCanSponsor: Boolean;
  viewerIsFollowing: Boolean;
  viewerIsSponsoring: Boolean;
  watching: RepositoryConnection;
  websiteUrl?: Maybe<URI>;
}
export interface UserAnyPinnableItemsArgs{
  type: Maybe<PinnableItemType>;
}
export interface UserAvatarUrlArgs{
  size: Maybe<number>;
}
export interface UserCanReceiveOrganizationEmailsWhenNotificationsRestrictedArgs{
  login: string;
}
export interface UserCommitCommentsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface UserContributionsCollectionArgs{
  from: Maybe<DateTime>;
  organizationID: Maybe<string>;
  to: Maybe<DateTime>;
}
export interface UserFollowersArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface UserFollowingArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface UserGistArgs{
  name: string;
}
export interface UserGistCommentsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface UserGistsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<GistOrder>;
  privacy: Maybe<GistPrivacy>;
}
export interface UserHovercardArgs{
  primarySubjectId: Maybe<string>;
}
export interface UserIsSponsoredByArgs{
  accountLogin: string;
}
export interface UserIssueCommentsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<IssueCommentOrder>;
}
export interface UserIssuesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  filterBy: Maybe<IssueFilters>;
  first: Maybe<number>;
  labels: Maybe<Array<string>>;
  last: Maybe<number>;
  orderBy: Maybe<IssueOrder>;
  states: Maybe<Array<IssueState>>;
}
export interface UserOrganizationArgs{
  login: string;
}
export interface UserOrganizationVerifiedDomainEmailsArgs{
  login: string;
}
export interface UserOrganizationsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<OrganizationOrder>;
}
export interface UserPackagesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  names: Maybe<Array<Maybe<string>>>;
  orderBy: Maybe<PackageOrder>;
  packageType: Maybe<PackageType>;
  repositoryId: Maybe<string>;
}
export interface UserPinnableItemsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  types: Maybe<Array<PinnableItemType>>;
}
export interface UserPinnedItemsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  types: Maybe<Array<PinnableItemType>>;
}
export interface UserProjectArgs{
  number: number;
}
export interface UserProjectV2Args{
  number: number;
}
export interface UserProjectsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ProjectOrder>;
  search: Maybe<string>;
  states: Maybe<Array<ProjectState>>;
}
export interface UserProjectsV2Args{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<ProjectV2Order>;
  query: Maybe<string>;
}
export interface UserPublicKeysArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface UserPullRequestsArgs{
  after: Maybe<string>;
  baseRefName: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  headRefName: Maybe<string>;
  labels: Maybe<Array<string>>;
  last: Maybe<number>;
  orderBy: Maybe<IssueOrder>;
  states: Maybe<Array<PullRequestState>>;
}
export interface UserRecentProjectsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface UserRepositoriesArgs{
  affiliations: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  hasIssuesEnabled: Maybe<Boolean>;
  isArchived: Maybe<Boolean>;
  isFork: Maybe<Boolean>;
  isLocked: Maybe<Boolean>;
  last: Maybe<number>;
  orderBy: Maybe<RepositoryOrder>;
  ownerAffiliations: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  privacy: Maybe<RepositoryPrivacy>;
}
export interface UserRepositoriesContributedToArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  contributionTypes: Maybe<Array<Maybe<RepositoryContributionType>>>;
  first: Maybe<number>;
  hasIssues: Maybe<Boolean>;
  includeUserRepositories: Maybe<Boolean>;
  isLocked: Maybe<Boolean>;
  last: Maybe<number>;
  orderBy: Maybe<RepositoryOrder>;
  privacy: Maybe<RepositoryPrivacy>;
}
export interface UserRepositoryArgs{
  followRenames: Maybe<Boolean>;
  name: string;
}
export interface UserRepositoryDiscussionCommentsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  onlyAnswers: Maybe<Boolean>;
  repositoryId: Maybe<string>;
}
export interface UserRepositoryDiscussionsArgs{
  after: Maybe<string>;
  answered: Maybe<Boolean>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<DiscussionOrder>;
  repositoryId: Maybe<string>;
  states: Maybe<Array<DiscussionState>>;
}
export interface UserSavedRepliesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<SavedReplyOrder>;
}
export interface UserSocialAccountsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface UserSponsoringArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<SponsorOrder>;
}
export interface UserSponsorsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<SponsorOrder>;
  tierId: Maybe<string>;
}
export interface UserSponsorsActivitiesArgs{
  actions: Maybe<Array<SponsorsActivityAction>>;
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  includeAsSponsor: Maybe<Boolean>;
  includePrivate: Maybe<Boolean>;
  last: Maybe<number>;
  orderBy: Maybe<SponsorsActivityOrder>;
  period: Maybe<SponsorsActivityPeriod>;
  since: Maybe<DateTime>;
  until: Maybe<DateTime>;
}
export interface UserSponsorshipForViewerAsSponsorArgs{
  activeOnly: Maybe<Boolean>;
}
export interface UserSponsorshipForViewerAsSponsorableArgs{
  activeOnly: Maybe<Boolean>;
}
export interface UserSponsorshipNewslettersArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<SponsorshipNewsletterOrder>;
}
export interface UserSponsorshipsAsMaintainerArgs{
  activeOnly: Maybe<Boolean>;
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  includePrivate: Maybe<Boolean>;
  last: Maybe<number>;
  orderBy: Maybe<SponsorshipOrder>;
}
export interface UserSponsorshipsAsSponsorArgs{
  activeOnly: Maybe<Boolean>;
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  maintainerLogins: Maybe<Array<string>>;
  orderBy: Maybe<SponsorshipOrder>;
}
export interface UserStarredRepositoriesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<StarOrder>;
  ownedByViewer: Maybe<Boolean>;
}
export interface UserTopRepositoriesArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: RepositoryOrder;
  since: Maybe<DateTime>;
}
export interface UserTotalSponsorshipAmountAsSponsorInCentsArgs{
  since: Maybe<DateTime>;
  sponsorableLogins: Maybe<Array<string>>;
  until: Maybe<DateTime>;
}
export interface UserWatchingArgs{
  affiliations: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  hasIssuesEnabled: Maybe<Boolean>;
  isLocked: Maybe<Boolean>;
  last: Maybe<number>;
  orderBy: Maybe<RepositoryOrder>;
  ownerAffiliations: Maybe<Array<Maybe<RepositoryAffiliation>>>;
  privacy: Maybe<RepositoryPrivacy>;
}
export enum UserBlockDuration {
  ONE_DAY,
  ONE_MONTH,
  ONE_WEEK,
  PERMANENT,
  THREE_DAYS,
}
export type UserBlockedEvent = Node &  {
  actor?: Maybe<Actor>;
  blockDuration: UserBlockDuration;
  createdAt: DateTime;
  id: string;
  subject?: Maybe<User>;
}
export interface UserConnection {
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export type UserContentEdit = Node &  {
  createdAt: DateTime;
  deletedAt?: Maybe<DateTime>;
  deletedBy?: Maybe<Actor>;
  diff?: Maybe<string>;
  editedAt: DateTime;
  editor?: Maybe<Actor>;
  id: string;
  updatedAt: DateTime;
}
export interface UserContentEditConnection {
  edges?: Maybe<Array<Maybe<UserContentEditEdge>>>;
  nodes?: Maybe<Array<Maybe<UserContentEdit>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface UserContentEditEdge {
  cursor: string;
  node?: Maybe<UserContentEdit>;
}
export interface UserEdge {
  cursor: string;
  node?: Maybe<User>;
}
export interface UserEmailMetadata {
  primary?: Maybe<Boolean>;
  type?: Maybe<string>;
  value: string;
}
export type UserStatus = Node &  {
  createdAt: DateTime;
  emoji?: Maybe<string>;
  emojiHTML?: Maybe<HTML>;
  expiresAt?: Maybe<DateTime>;
  id: string;
  indicatesLimitedAvailability: Boolean;
  message?: Maybe<string>;
  organization?: Maybe<Organization>;
  updatedAt: DateTime;
  user: User;
}
export interface UserStatusConnection {
  edges?: Maybe<Array<Maybe<UserStatusEdge>>>;
  nodes?: Maybe<Array<Maybe<UserStatus>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface UserStatusEdge {
  cursor: string;
  node?: Maybe<UserStatus>;
}
export type UserStatusOrder = {
  direction: OrderDirection;
  field: UserStatusOrderField;
}
export enum UserStatusOrderField {
  UPDATED_AT,
}
export type VerifiableDomain = Node &  {
  createdAt: DateTime;
  databaseId?: Maybe<number>;
  dnsHostName?: Maybe<URI>;
  domain: URI;
  hasFoundHostName: Boolean;
  hasFoundVerificationToken: Boolean;
  id: string;
  isApproved: Boolean;
  isRequiredForPolicyEnforcement: Boolean;
  isVerified: Boolean;
  owner: VerifiableDomainOwner;
  punycodeEncodedDomain: URI;
  tokenExpirationTime?: Maybe<DateTime>;
  updatedAt: DateTime;
  verificationToken?: Maybe<string>;
}
export interface VerifiableDomainConnection {
  edges?: Maybe<Array<Maybe<VerifiableDomainEdge>>>;
  nodes?: Maybe<Array<Maybe<VerifiableDomain>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface VerifiableDomainEdge {
  cursor: string;
  node?: Maybe<VerifiableDomain>;
}
export type VerifiableDomainOrder = {
  direction: OrderDirection;
  field: VerifiableDomainOrderField;
}
export enum VerifiableDomainOrderField {
  CREATED_AT,
  DOMAIN,
}
export type VerifiableDomainOwner = Enterprise | Organization;
export type VerifyVerifiableDomainInput = {
  clientMutationId?: Maybe<string>;
  id: string;
}
export interface VerifyVerifiableDomainPayload {
  clientMutationId?: Maybe<string>;
  domain?: Maybe<VerifiableDomain>;
}
export type ViewerHovercardContext = HovercardContext &  {
  message: string;
  octicon: string;
  viewer: User;
}
export interface Votable {
  upvoteCount: number;
  viewerCanUpvote: Boolean;
  viewerHasUpvoted: Boolean;
}
export type Workflow = Node & UniformResourceLocatable &  {
  createdAt: DateTime;
  databaseId?: Maybe<number>;
  id: string;
  name: string;
  resourcePath: URI;
  runs: WorkflowRunConnection;
  state: WorkflowState;
  updatedAt: DateTime;
  url: URI;
}
export interface WorkflowRunsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
  orderBy: Maybe<WorkflowRunOrder>;
}
export type WorkflowRun = Node & UniformResourceLocatable &  {
  checkSuite: CheckSuite;
  createdAt: DateTime;
  databaseId?: Maybe<number>;
  deploymentReviews: DeploymentReviewConnection;
  event: string;
  file?: Maybe<WorkflowRunFile>;
  id: string;
  pendingDeploymentRequests: DeploymentRequestConnection;
  resourcePath: URI;
  runNumber: number;
  updatedAt: DateTime;
  url: URI;
  workflow: Workflow;
}
export interface WorkflowRunDeploymentReviewsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface WorkflowRunPendingDeploymentRequestsArgs{
  after: Maybe<string>;
  before: Maybe<string>;
  first: Maybe<number>;
  last: Maybe<number>;
}
export interface WorkflowRunConnection {
  edges?: Maybe<Array<Maybe<WorkflowRunEdge>>>;
  nodes?: Maybe<Array<Maybe<WorkflowRun>>>;
  pageInfo: PageInfo;
  totalCount: number;
}
export interface WorkflowRunEdge {
  cursor: string;
  node?: Maybe<WorkflowRun>;
}
export type WorkflowRunFile = Node & UniformResourceLocatable &  {
  id: string;
  path: string;
  repositoryFileUrl: URI;
  repositoryName: URI;
  resourcePath: URI;
  run: WorkflowRun;
  url: URI;
  viewerCanPushRepository: Boolean;
  viewerCanReadRepository: Boolean;
}
export type WorkflowRunOrder = {
  direction: OrderDirection;
  field: WorkflowRunOrderField;
}
export enum WorkflowRunOrderField {
  CREATED_AT,
}
export enum WorkflowState {
  ACTIVE,
  DELETED,
  DISABLED_FORK,
  DISABLED_INACTIVITY,
  DISABLED_MANUALLY,
}
