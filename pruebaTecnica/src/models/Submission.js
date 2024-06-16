class Submission {
    constructor(submissionType, submissionNumber, submissionStatus, submissionStatusDate, submissionClassCode, reviewPriority = null, submissionClassCodeDescription = null) {
      this.submissionType = submissionType;
      this.submissionNumber = submissionNumber;
      this.submissionStatus = submissionStatus;
      this.submissionStatusDate = submissionStatusDate;
      this.submissionClassCode = submissionClassCode;
      this.reviewPriority = reviewPriority;
      this.submissionClassCodeDescription = submissionClassCodeDescription;
    }
  }
  export default Submission;