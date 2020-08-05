# Internet-Applications
### Web Project Application for Appathon@NTUA 2020

# Περιγραφή Project 

Στα πλαίσια του μαθήματος Διαδίκτυο και Εφαρμογές αναπτύχθηκε μια δικτυακή εφαρμογή  σχετικά με τις κλινικές μελέτες. Συγκεκριμένα ο χρήστης μέσω της εφαρμογής θα μπορεί να βρίσκει το πλήθος των ασθενών που συμμετέχουν σε κλινικές μελέτες για μια συγκεκριμένη ασθένεια και στη συγκεκριμένη  χώρα  που όρισε ο ίδιος μέσα από την web σελίδα, καθώς και τον μέσο χρόνο που απαιτήθηκε για την στρατολόγηση αυτών.Ο χρόνος αυτός ,της εύρεσης των ασθενών, υπολογίζεται ως το διάστημα μεταξύ της πρώτης υποβολλής δεδομένων για την κλινική μελέτη και του τελευταίου update της.  
Για τις ανάγκες τις εφαρμογής χρησιμοποιήθηκαν όλες οι διαθέσιμες κλινικές
δοκιμές (XML αρχεία) από το https://clinicaltrials.gov/

# Τεχνολογίες που χρησιμοποιήθηκαν

### Βάση Δεδομένων
Τα δεδομένα από τα XML αρχεία  αποθηκεύτηκαν σε βάση δεδομένων **MongoDB** , αφού πρώτα μετατράπηκαν σε json αρχεία , με πρόγραμμα που αναπτύχθηκε σε python.
### Backend
Το backend υλοποιήθηκε με **node.js**.Χρησιμοποιήθηκε **mongoose**(npm module-MongoDB object modeling tool ) για την επικοινωνία με τη βάση δεδομένων. Για to REST API χρησιμοποιήθηκε το web framework της Node, **"Express"** . H δοκιμή της λειτουργικότητας του API έγινε με  την εφαρμογή Postman , με την αποστολή hhtp requests στον server. 
### Frontend 
To frontend αναπτύχθηκε με τη βιβλιοθήκη **React της Javascript**

# Οδηγίες εγκατάστασης και εκτέλεσης σε Windows 10 
1. Λήψη ως XML αρχεία τα δέδομενα κλινικών δοκιμών από το  https://clinicaltrials.gov/

2. Κάνουμε clone το project στον υπολογιστή μας : 
   ```bash
   git clone https://github.com/androna-xm/Internet-Applications.git
   ```
   
3. Αποθηκεύουμε τα XML-αρχεία μέσα στο φάκελο Internet-APliations του project σε νέο φάκελο με όνομα ClinicalTrials_data.

4. Για να εισάγουμε τα δεδομένα (XML αρχεία ) στη mongodb βάση μας σε μορφή json εκτελούμε το python αρχείο input_db.py μέσα στον φάκελο Internet-Applications του project.
   ```bash
   cd Internet-Applications
   python input_db.py
   ```
   Έτσι δημιουργείται στη MongoDB η βάση 'ClinicalTrials_db' με το collection 'ClinicalTrialData' που περιέχει τα δεδομένα. 

5. Εγκατάσταση node.js και npm από το ακόλουθο link: https://nodejs.org/en/download/
   
6. Για να τρέξει το backend  μεταβαίνουμε στο φάκελο TrialsApi
   ```bash 
   cd Internet-Applications/TrialsApi
   ```
   
   ```bash
   npm i
   npm run dev
   ```
7. Για τo frontend μεταβαίνουμε στο φάκελο frontend 
   ```bash 
   cd Internet-Applications/frontend
   ```
   ```bash
   npm start
   ```
