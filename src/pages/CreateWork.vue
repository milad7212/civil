<template>
  <v-app>
    <v-main class="bg-gray-100">
      <v-container>
        <h1 class="text-3xl font-bold text-center my-8">Submit Your Job Request</h1>

        <!-- Job Request Form -->
        <v-card class="mb-8">
          <v-form @submit.prevent="submitJobRequest">
            <!-- Job Details -->
            <v-card-title class="text-xl font-bold">Job Details</v-card-title>
            <v-text-field v-model="jobTitle" label="Job Title" required class="mb-4"></v-text-field>
            <v-textarea v-model="jobDescription" label="Job Description" required class="mb-4"></v-textarea>
            <v-file-input v-model="jobFile" label="Upload File" class="mb-4"></v-file-input>

            <!-- Engineer Selection -->
            <v-divider class="my-8"></v-divider>
            <v-card-title class="text-xl font-bold">Select Engineers</v-card-title>
            <v-row class="-mx-2">
              <v-col v-for="(engineer, index) in engineers" :key="index" cols="12" sm="6" md="4" lg="3" class="px-2">
                <v-card class="mb-4 rounded-lg shadow-md">
                  <v-card-title class="text-lg font-bold">{{ engineer.name }}</v-card-title>
                  <v-card-text class="text-gray-600">{{ engineer.type }}</v-card-text>
                  <v-card-actions>
                    <v-radio v-model="selectedEngineers" :label="engineer.name" :value="engineer"></v-radio>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>

            <!-- Payment -->
            <v-divider class="my-8"></v-divider>
            <v-card-title class="text-xl font-bold">Payment</v-card-title>
            <v-text-field v-model="numberOfRecipients" label="Number of Recipients" required class="mb-4"></v-text-field>
            <v-text-field v-model="paymentAmount" label="Payment Amount" required class="mb-4"></v-text-field>

            <!-- Submit Button -->
            <v-card-actions>
              <v-btn type="submit" color="primary">Submit</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>

        <!-- Job Requests List -->
        <h2 class="text-2xl font-bold mb-4">Job Requests</h2>
        <v-row class="-mx-2">
          <v-col v-for="(request, index) in jobRequests" :key="index" cols="12" sm="6" md="4" lg="3" class="px-2">
            <v-card class="mb-4 rounded-lg shadow-md">
              <v-card-title class="text-xl font-bold">{{ request.title }}</v-card-title>
              <v-card-text class="text-gray-600">{{ request.description }}</v-card-text>
              <v-card-subtitle class="text-gray-600">Engineers: {{ request.engineers.join(', ') }}</v-card-subtitle>
              <v-card-subtitle class="text-gray-600">Recipients: {{ request.recipients }}</v-card-subtitle>
              <v-card-subtitle class="text-gray-600">Payment: {{ request.amount }}</v-card-subtitle>
              <v-card-actions>
                <v-btn color="primary">View Details</v-btn>
                <v-btn color="error">Delete</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      // Job Details
      jobTitle: '',
      jobDescription: '',
      jobFile: null,

      // Engineers
      engineers: [
        { name: 'Architect 1', type: 'Architect' },
        { name: 'Architect 2', type: 'Architect' },
        { name: 'Civil Engineer 1', type: 'Civil' },
        { name: 'Civil Engineer 2', type: 'Civil' },
        { name: 'Structural Engineer 1', type: 'Structural' },
        { name: 'Structural Engineer 2', type: 'Structural' },
      ],
      selectedEngineers: null,

      // Payment
      numberOfRecipients: '',
      paymentAmount: '',

      // Job Requests
      jobRequests: [],
    }
  },
  methods: {
    // Submit Job Request
    submitJobRequest() {
      const newRequest = {
        title: this.jobTitle,
        description: this.jobDescription,
        file: this.jobFile,
        engineers: this.selectedEngineers ? [this.selectedEngineers.name] : [],
        recipients: this.numberOfRecipients,
        amount: this.paymentAmount,
      }

      this.jobRequests.push(newRequest)

      // Reset Form
      this.jobTitle = ''
      this.jobDescription = ''
      this.jobFile = null
      this.selectedEngineers = null
      this.numberOfRecipients = ''
      this.paymentAmount = ''
    },
  },
}
</script>