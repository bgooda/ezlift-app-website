"use client";

export default function Privacy() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight mb-4">Privacy Policy</h1>
      <p className="text-lg text-muted-foreground mb-8">Last updated: December 30, 2024</p>

      <div className="space-y-4 mb-12">
        <p>
          This Privacy Notice for Ez Works Berlin UG ("<strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>"), describes how and why we might access, collect, store, use, and/or share ("<strong>process</strong>") your personal information when you use our services ("<strong>Services</strong>"), including when you:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Visit our website at <a href="https://ezlift.app" className="text-primary hover:underline">https://ezlift.app</a>, or any website of ours that links to this Privacy Notice</li>
          <li>Download and use our mobile application (EzLift App Pro), or any other application of ours that links to this Privacy Notice</li>
          <li>Use EzLift App Pro, Weight Lifting & Fitness Tracking App. EzLift is a mobile application designed for advanced weightlifters, offering features such as customizable workout routines, seamless exercise logging, progress tracking, and unique tools like handwritten workout log scanning. Built by experienced lifters, EzLift prioritizes user experience and data-driven insights to enhance training performance.</li>
          <li>Engage with us in other related ways, including any sales, marketing, or events</li>
        </ul>
        <p>
          <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:dev@ezlift.app" className="text-primary hover:underline">dev@ezlift.app</a>.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-6">SUMMARY OF KEY POINTS</h2>
      <div className="space-y-4 mb-12">
        <p>
          This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our{" "}
          <button onClick={() => scrollToSection('toc')} className="text-primary hover:underline">
            table of contents
          </button>{" "}
          below to find the section you are looking for.
        </p>

        <p>
          <strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about{" "}
          <button onClick={() => scrollToSection('collect')} className="text-primary hover:underline">
            personal information you disclose to us
          </button>.
        </p>

        <p>
          <strong>Do we process any sensitive personal information?</strong> Some of the information may be considered "special" or "sensitive" in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law. Learn more about{" "}
          <button onClick={() => scrollToSection('collect')} className="text-primary hover:underline">
            sensitive information we process
          </button>.
        </p>

        <p>
          <strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.
        </p>

        <p>
          <strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about{" "}
          <button onClick={() => scrollToSection('process')} className="text-primary hover:underline">
            how we process your information
          </button>.
        </p>

        <p>
          <strong>In what situations and with which types of parties do we share personal information?</strong> We may share information in specific situations and with specific categories of third parties. Learn more about{" "}
          <button onClick={() => scrollToSection('share')} className="text-primary hover:underline">
            when and with whom we share your personal information
          </button>.
        </p>

        <p>
          <strong>How do we keep your information safe?</strong> We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about{" "}
          <button onClick={() => scrollToSection('security')} className="text-primary hover:underline">
            how we keep your information safe
          </button>.
        </p>

        <p>
          <strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about{" "}
          <button onClick={() => scrollToSection('rights')} className="text-primary hover:underline">
            your privacy rights
          </button>.
        </p>

        <p>
          <strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by visiting{" "}
          <a href="https://ezlift.app" className="text-primary hover:underline">www.ezlift.app</a>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
        </p>

        <p>
          Want to learn more about what we do with any information we collect?{" "}
          <button onClick={() => scrollToSection('toc')} className="text-primary hover:underline">
            Review the Privacy Notice in full
          </button>.
        </p>
      </div>

      <h2 id="toc" className="text-2xl font-semibold mb-6">Table of Contents</h2>
      <ol className="list-decimal list-inside space-y-2 mb-12">
        <li><button onClick={() => scrollToSection('collect')} className="text-primary hover:underline">WHAT INFORMATION DO WE COLLECT?</button></li>
        <li><button onClick={() => scrollToSection('process')} className="text-primary hover:underline">HOW DO WE PROCESS YOUR INFORMATION?</button></li>
        <li><button onClick={() => scrollToSection('legal-bases')} className="text-primary hover:underline">WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</button></li>
        <li><button onClick={() => scrollToSection('share')} className="text-primary hover:underline">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</button></li>
        <li><button onClick={() => scrollToSection('cookies')} className="text-primary hover:underline">DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</button></li>
        <li><button onClick={() => scrollToSection('ai')} className="text-primary hover:underline">DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</button></li>
        <li><button onClick={() => scrollToSection('social')} className="text-primary hover:underline">HOW DO WE HANDLE YOUR SOCIAL LOGINS?</button></li>
        <li><button onClick={() => scrollToSection('retention')} className="text-primary hover:underline">HOW LONG DO WE KEEP YOUR INFORMATION?</button></li>
        <li><button onClick={() => scrollToSection('security')} className="text-primary hover:underline">HOW DO WE KEEP YOUR INFORMATION SAFE?</button></li>
        <li><button onClick={() => scrollToSection('minors')} className="text-primary hover:underline">DO WE COLLECT INFORMATION FROM MINORS?</button></li>
        <li><button onClick={() => scrollToSection('rights')} className="text-primary hover:underline">WHAT ARE YOUR PRIVACY RIGHTS?</button></li>
        <li><button onClick={() => scrollToSection('dnt')} className="text-primary hover:underline">CONTROLS FOR DO-NOT-TRACK FEATURES</button></li>
        <li><button onClick={() => scrollToSection('us-rights')} className="text-primary hover:underline">DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</button></li>
        <li><button onClick={() => scrollToSection('other-rights')} className="text-primary hover:underline">DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?</button></li>
        <li><button onClick={() => scrollToSection('updates')} className="text-primary hover:underline">DO WE MAKE UPDATES TO THIS NOTICE?</button></li>
        <li><button onClick={() => scrollToSection('contact')} className="text-primary hover:underline">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</button></li>
        <li><button onClick={() => scrollToSection('review')} className="text-primary hover:underline">HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</button></li>
      </ol>

      <h2 id="collect" className="text-2xl font-semibold mb-6">1. WHAT INFORMATION DO WE COLLECT?</h2>
      <div className="space-y-6 mb-12">
        <h3 className="text-xl font-semibold">Personal information you disclose to us</h3>
        <p>
          <strong>In Short:</strong> <em>We collect personal information that you provide to us.</em>
        </p>
        <p>
          We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
        </p>
        <div className="space-y-2">
          <p>
            <strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>names</li>
            <li>email addresses</li>
            <li>contact preferences</li>
          </ul>
        </div>
        <div className="space-y-2">
          <p>
            <strong>Sensitive Information.</strong> When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>health data</li>
          </ul>
        </div>
        <p>
          <strong>Payment Data.</strong> We may collect data necessary to process your payment if you choose to make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is handled and stored by Apple Payments. You may find their privacy notice link(s) here: <a href="https://www.apple.com/legal/applepayments/privacy-notice/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.apple.com/legal/applepayments/privacy-notice/</a>.
        </p>
        <p>
          <strong>Social Media Login Data.</strong> We may provide you with the option to register with us using your existing social media account details, like your Facebook, X, or other social media account. If you choose to register in this way, we will collect certain profile information about you from the social media provider, as described in the section called <button onClick={() => scrollToSection('social')} className="text-primary hover:underline">"HOW DO WE HANDLE YOUR SOCIAL LOGINS?"</button> below.
        </p>
        <div className="space-y-2">
          <p>
            <strong>Application Data.</strong> If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-4">
            <li>
              <strong>Geolocation Information.</strong> We may request access or permission to track location-based information from your mobile device, either continuously or while you are using our mobile application(s), to provide certain location-based services. If you wish to change our access or permissions, you may do so in your device's settings.
            </li>
            <li>
              <strong>Mobile Device Access.</strong> We may request access or permission to certain features from your mobile device, including your mobile device's camera, calendar, contacts, microphone, sms messages, social media accounts, and other features. If you wish to change our access or permissions, you may do so in your device's settings.
            </li>
            <li>
              <strong>Mobile Device Data.</strong> We automatically collect device information (such as your mobile device ID, model, and manufacturer), operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server). If you are using our application(s), we may also collect information about the phone network associated with your mobile device, your mobile device's operating system or platform, the type of mobile device you use, your mobile device's unique device ID, and information about the features of our application(s) you accessed.
            </li>
            <li>
              <strong>Push Notifications.</strong> We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings.
            </li>
          </ul>
        </div>
        <p>
          This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.
        </p>
        <p>
          All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
        </p>

        <h3 className="text-xl font-semibold">Information automatically collected</h3>
        <p>
          <strong>In Short:</strong> <em>Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</em>
        </p>
        <p>
          We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
        </p>
        <p>
          Like many businesses, we also collect information through cookies and similar technologies. You can find out more about this in our Cookie Notice.
        </p>
        <div className="space-y-4">
          <p>The information we collect includes:</p>
          <ul className="list-disc list-inside ml-4 space-y-4">
            <li>
              <strong>Log and Usage Data.</strong> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).
            </li>
            <li>
              <strong>Device Data.</strong> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.
            </li>
            <li>
              <strong>Location Data.</strong> We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.
            </li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold">Google API</h3>
        <p>
          Our use of information received from Google APIs will adhere to <a href="https://developers.google.com/terms/api-services-user-data-policy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, including the <a href="https://developers.google.com/terms/api-services-user-data-policy#limited-use" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Limited Use requirements</a>.
        </p>
      </div>

      <h2 id="process" className="text-2xl font-semibold mb-6">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
      <div className="space-y-6 mb-12">
        <p>
          <strong>In Short:</strong> <em>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</em>
        </p>
        <div className="space-y-4">
          <p>
            We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-4">
            <li>
              <strong>To facilitate account creation and authentication and otherwise manage user accounts.</strong> We may process your information so you can create and log in to your account, as well as keep your account in working order.
            </li>
            <li>
              <strong>To deliver and facilitate delivery of services to the user.</strong> We may process your information to provide you with the requested service.
            </li>
            <li>
              <strong>To request feedback.</strong> We may process your information when necessary to request feedback and to contact you about your use of our Services.
            </li>
            <li>
              <strong>To send you marketing and promotional communications.</strong> We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see <button onClick={() => scrollToSection('rights')} className="text-primary hover:underline">"WHAT ARE YOUR PRIVACY RIGHTS?"</button> below.
            </li>
            <li>
              <strong>To deliver targeted advertising to you.</strong> We may process your information to develop and display personalized content and advertising tailored to your interests, location, and more. For more information see our Cookie Notice.
            </li>
            <li>
              <strong>To protect our Services.</strong> We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.
            </li>
            <li>
              <strong>To identify usage trends.</strong> We may process information about how you use our Services to better understand how they are being used so we can improve them.
            </li>
            <li>
              <strong>To determine the effectiveness of our marketing and promotional campaigns.</strong> We may process your information to better understand how to provide marketing and promotional campaigns that are most relevant to you.
            </li>
            <li>
              <strong>To save or protect an individual's vital interest.</strong> We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm.
            </li>
            <li>
              <strong>Gender Specific Features.</strong> The app could offer certain features, stats or workout programs specific to males or females.
            </li>
          </ul>
        </div>
      </div>

      <h2 id="legal-bases" className="text-2xl font-semibold mb-6">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</h2>
      <div className="space-y-6 mb-12">
        <p>
          <strong>In Short:</strong> <em>We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.</em>
        </p>

        <p className="font-bold italic underline">If you are located in the EU or UK, this section applies to you.</p>

        <div className="space-y-4">
          <p>
            The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-4">
            <li>
              <strong>Consent.</strong> We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Learn more about withdrawing your consent.
            </li>
            <li>
              <strong>Performance of a Contract.</strong> We may process your personal information when we believe it is necessary to fulfill our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.
            </li>
            <li>
              <strong>Legitimate Interests.</strong> We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms. For example, we may process your personal information for some of the purposes described in order to:
              <ul className="list-disc list-inside ml-8 mt-2 space-y-2">
                <li>Send users information about special offers and discounts on our products and services</li>
                <li>Develop and display personalized and relevant advertising content for our users</li>
                <li>Analyze how our Services are used so we can improve them to engage and retain users</li>
                <li>Support our marketing activities</li>
                <li>Diagnose problems and/or prevent fraudulent activities</li>
                <li>Understand how our users use our products and services so we can improve user experience</li>
              </ul>
            </li>
            <li>
              <strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.
            </li>
            <li>
              <strong>Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.
            </li>
          </ul>
        </div>

        <p>
          In legal terms, we are generally the "data controller" under European data protection laws of the personal information described in this Privacy Notice, since we determine the means and/or purposes of the data processing we perform. This Privacy Notice does not apply to the personal information we process as a "data processor" on behalf of our customers. In those situations, the customer that we provide services to and with whom we have entered into a data processing agreement is the "data controller" responsible for your personal information, and we merely process your information on their behalf in accordance with your instructions. If you want to know more about our customers' privacy practices, you should read their privacy policies and direct any questions you have to them.
        </p>

        <p className="font-bold italic underline">If you are located in Canada, this section applies to you.</p>

        <p>
          We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.
        </p>

        <div className="space-y-4">
          <p>
            In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
            <li>For investigations and fraud detection and prevention</li>
            <li>For business transactions provided certain conditions are met</li>
            <li>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li>
            <li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
            <li>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</li>
            <li>If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</li>
            <li>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</li>
            <li>If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</li>
            <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
            <li>If the information is publicly available and is specified by the regulations</li>
          </ul>
        </div>
      </div>


      <h2 id="share" className="text-2xl font-semibold mb-6">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
      <div className="space-y-6 mb-12">
        <p>
          <strong>In Short:</strong> <em>We may share information in specific situations described in this section and/or with the following categories of third parties.</em>
        </p>

        <p>
          Vendors, Consultants, and Other Third-Party Service Providers. We may share your data with third-party vendors, service providers, contractors, or agents ("third parties") who perform services for us or on our behalf and require access to such information to do that work. We have contracts in place with our third parties, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organization apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct.
        </p>

        <div className="space-y-4">
          <p>The categories of third parties we may share personal information with are as follows:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Data Analytics Services</li>
            <li>AI Platforms</li>
            <li>Payment Processors</li>
            <li>User Account Registration & Authentication Services</li>
            <li>Website Hosting Service Providers</li>
            <li>Cloud Computing Services</li>
            <li>Data Storage Service Providers</li>
            <li>Social Networks</li>
            <li>Testing Tools</li>
            <li>Performance Monitoring Tools</li>
            <li>Retargeting Platforms</li>
          </ul>
        </div>

        <div className="space-y-4">
          <p>We also may need to share your personal information in the following situations:</p>
          <ul className="list-disc list-inside ml-4 space-y-4">
            <li>
              <strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
            </li>
            <li>
              <strong>Business Partners.</strong> We may share your information with our business partners to offer you certain products, services, or promotions.
            </li>
            <li>
              <strong>Offer Wall.</strong> Our application(s) may display a third-party hosted "offer wall." Such an offer wall allows third-party advertisers to offer virtual currency, gifts, or other items to users in return for the acceptance and completion of an advertisement offer. Such an offer wall may appear in our application(s) and be displayed to you based on certain data, such as your geographic area or demographic information. When you click on an offer wall, you will be brought to an external website belonging to other persons and will leave our application(s). A unique identifier, such as your user ID, will be shared with the offer wall provider in order to prevent fraud and properly credit your account with the relevant reward.
            </li>
          </ul>
        </div>
      </div>


      <h2 id="cookies" className="text-2xl font-semibold mb-6">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
      <div className="space-y-6 mb-12">
        <p>
          <strong>In Short:</strong> <em>We may use cookies and other tracking technologies to collect and store your information.</em>
        </p>

        <p>
          We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services and your account, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.
        </p>

        <p>
          We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites.
        </p>

        <p>
          To the extent these online tracking technologies are deemed to be a "sale"/"sharing" (which includes targeted advertising, as defined under the applicable laws) under applicable US state laws, you can opt out of these online tracking technologies by submitting a request as described below under section <button onClick={() => scrollToSection('us-rights')} className="text-primary hover:underline">"DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?"</button>
        </p>

        <p>
          Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
        </p>

        <h3 className="text-xl font-semibold">Google Analytics</h3>
        <p>
          We may share your information with Google Analytics to track and analyze the use of the Services. To opt out of being tracked by Google Analytics across the Services, visit <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout</a>. For more information on the privacy practices of Google, please visit the <a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy & Terms page</a>.
        </p>
      </div>


      <h2 id="ai" className="text-2xl font-semibold mb-6">6. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</h2>
      <div className="space-y-6 mb-12">
        <p>
          <strong>In Short:</strong> <em>We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.</em>
        </p>

        <p>
          As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies (collectively, "AI Products"). These tools are designed to enhance your experience and provide you with innovative solutions. The terms in this Privacy Notice govern your use of the AI Products within our Services.
        </p>

        <div className="space-y-4">
          <p className="font-bold">Use of AI Technologies</p>
          <p>
            We provide the AI Products through third-party service providers ("AI Service Providers"), including OpenAI. As outlined in this Privacy Notice, your input, output, and personal information will be shared with and processed by these AI Service Providers to enable your use of our AI Products for purposes outlined in <button onClick={() => scrollToSection('legal-bases')} className="text-primary hover:underline">"WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?"</button> You must not use the AI Products in any way that violates the terms or policies of any AI Service Provider.
          </p>
        </div>

        <div className="space-y-4">
          <p className="font-bold">Our AI Products</p>
          <p>Our AI Products are designed for the following functions:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Image analysis</li>
            <li>AI insights</li>
            <li>AI predictive analytics</li>
            <li>AI search</li>
            <li>AI automation</li>
            <li>AI bots</li>
            <li>AI translation</li>
          </ul>
        </div>

        <div className="space-y-4">
          <p className="font-bold">How We Process Your Data Using AI</p>
          <p>
            All personal information processed using our AI Products is handled in line with our Privacy Notice and our agreement with third parties. This ensures high security and safeguards your personal information throughout the process, giving you peace of mind about your data's safety.
          </p>
        </div>
      </div>


      <h2 id="social" className="text-2xl font-semibold mb-6">7. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2>
      <div className="space-y-6 mb-12">
        <p>
          <strong>In Short:</strong> <em>If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.</em>
        </p>

        <p>
          Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or X logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.
        </p>

        <p>
          We will use the information we receive only for the purposes that are described in this Privacy Notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.
        </p>
      </div>

      <h2 id="retention" className="text-2xl font-semibold mb-6">8. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
      <div className="space-y-6 mb-12">
        <p>
          <strong>In Short:</strong> <em>We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</em>
        </p>

        <p>
          We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.
        </p>

        <p>
          When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
        </p>
      </div>

      <h2 id="security" className="text-2xl font-semibold mb-6">9. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
      <div className="space-y-6 mb-12">
        <p>
          <strong>In Short:</strong> <em>We aim to protect your personal information through a system of organizational and technical security measures.</em>
        </p>

        <p>
          We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
        </p>
      </div>

      <h2 id="minors" className="text-2xl font-semibold mb-6">10. DO WE COLLECT INFORMATION FROM MINORS?</h2>
      <div className="space-y-6 mb-12">
        <p>
          <strong>In Short:</strong> <em>We do not knowingly collect data from or market to children under 18 years of age.</em>
        </p>

        <p>
          We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at <a href="mailto:dev@ezlift.app" className="text-primary hover:underline">dev@ezlift.app</a>.
        </p>
      </div>

      <h2 id="rights" className="text-2xl font-semibold mb-6">11. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
      <div className="space-y-6 mb-12">
        <p>
          <strong>In Short:</strong> <em>Depending on your state of residence in the US or in some regions, such as the European Economic Area (EEA), United Kingdom (UK), Switzerland, and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</em>
        </p>

        <p>
          In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section <button onClick={() => scrollToSection('contact')} className="text-primary hover:underline">"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"</button> below.
        </p>

        <p>
          We will consider and act upon any request in accordance with applicable data protection laws.
        </p>

        <p>
          If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your <a href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Member State data protection authority</a> or <a href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">UK data protection authority</a>.
        </p>

        <p>
          If you are located in Switzerland, you may contact the <a href="https://www.edoeb.admin.ch/edoeb/en/home.html" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Federal Data Protection and Information Commissioner</a>.
        </p>

        <p>
          <strong className="font-bold underline">Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section <button onClick={() => scrollToSection('contact')} className="text-primary hover:underline">"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"</button> below.
        </p>

        <p>
          However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
        </p>

        <p>
          <strong className="font-bold underline">Opting out of marketing and promotional communications:</strong> You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us using the details provided in the section <button onClick={() => scrollToSection('contact')} className="text-primary hover:underline">"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"</button> below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.
        </p>

        <h3 className="text-xl font-semibold">Account Information</h3>

        <p>
          If you would at any time like to review or change the information in your account or terminate your account, you can:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>Log in to your account settings and update your user account.</li>
          <li>Contact us using the contact information provided.</li>
        </ul>

        <p>
          Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.
        </p>

        <p>
          <strong className="font-bold underline">Cookies and similar technologies:</strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. For further information, please see our Cookie Notice.
        </p>

        <p>
          If you have questions or comments about your privacy rights, you may email us at <a href="mailto:dev@ezlift.app" className="text-primary hover:underline">dev@ezlift.app</a>.
        </p>
      </div>

      <h2 id="dnt" className="text-2xl font-semibold mb-6">12. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
      <div className="space-y-6 mb-12">
        <p>
          Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.
        </p>

        <p>
          California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.
        </p>
      </div>

      <h2 id="us-rights" className="text-2xl font-semibold mb-6">13. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
      <div className="space-y-6 mb-12">
        <p>
          <strong>In Short:</strong> <em>If you are a resident of Iowa, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. More information is provided below.</em>
        </p>

        <h3 className="text-xl font-semibold">Categories of Personal Information We Collect</h3>
        <p>We have collected the following categories of personal information in the past twelve (12) months:</p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="border p-4 text-left">Category</th>
                <th className="border p-4 text-left">Examples</th>
                <th className="border p-4 text-left">Collected</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-4">A. Identifiers</td>
                <td className="border p-4">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td>
                <td className="border p-4">NO</td>
              </tr>
              <tr>
                <td className="border p-4">B. Protected classification characteristics under state or federal law</td>
                <td className="border p-4">Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data</td>
                <td className="border p-4">NO</td>
              </tr>
              <tr>
                <td className="border p-4">C. Commercial information</td>
                <td className="border p-4">Transaction information, purchase history, financial details, and payment information</td>
                <td className="border p-4">NO</td>
              </tr>
              <tr>
                <td className="border p-4">D. Biometric information</td>
                <td className="border p-4">Fingerprints and voiceprints</td>
                <td className="border p-4">NO</td>
              </tr>
              <tr>
                <td className="border p-4">E. Internet or other similar network activity</td>
                <td className="border p-4">Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements</td>
                <td className="border p-4">NO</td>
              </tr>
              <tr>
                <td className="border p-4">F. Geolocation data</td>
                <td className="border p-4">Device location</td>
                <td className="border p-4">NO</td>
              </tr>
              <tr>
                <td className="border p-4">G. Audio, electronic, sensory, or similar information</td>
                <td className="border p-4">Images and audio, video or call recordings created in connection with our business activities</td>
                <td className="border p-4">NO</td>
              </tr>
              <tr>
                <td className="border p-4">H. Professional or employment-related information</td>
                <td className="border p-4">Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</td>
                <td className="border p-4">NO</td>
              </tr>
              <tr>
                <td className="border p-4">I. Education Information</td>
                <td className="border p-4">Student records and directory information</td>
                <td className="border p-4">NO</td>
              </tr>
              <tr>
                <td className="border p-4">J. Inferences drawn from collected personal information</td>
                <td className="border p-4">Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual's preferences and characteristics</td>
                <td className="border p-4">NO</td>
              </tr>
              <tr>
                <td className="border p-4">K. Sensitive personal Information</td>
                <td className="border p-4">Account login information and health data</td>
                <td className="border p-4">YES</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          We only collect sensitive personal information, as defined by applicable privacy laws or the purposes allowed by law or with your consent. Sensitive personal information may be used, or disclosed to a service provider or contractor, for additional, specified purposes. You may have the right to limit the use or disclosure of your sensitive personal information. We do not collect or process sensitive personal information for the purpose of inferring characteristics about you.
        </p>

        <p>
          We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>Receiving help through our customer support channels;</li>
          <li>Participation in customer surveys or contests; and</li>
          <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
        </ul>

        <p>We will use and retain the collected personal information as needed to provide the Services or for:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Category K - As long as the user has an account with us</li>
        </ul>

        <h3 className="text-xl font-semibold">Sources of Personal Information</h3>
        <p>
          Learn more about the sources of personal information we collect in{' '}
          <button onClick={() => scrollToSection('collect')} className="text-primary hover:underline">
            "WHAT INFORMATION DO WE COLLECT?"
          </button>
        </p>

        <h3 className="text-xl font-semibold">How We Use and Share Personal Information</h3>
        <p>
          Learn more about how we use your personal information in the section,{' '}
          <button onClick={() => scrollToSection('process')} className="text-primary hover:underline">
            "HOW DO WE PROCESS YOUR INFORMATION?"
          </button>
        </p>

        <p>We collect and share your personal information through:</p>
        <ul className="list-disc list-inside ml-4 space-y-4">
          <li>Beacons/Pixels/Tags</li>
          <li>
            Social media plugins: We use social media features, such as a "Like" button, and widgets, such as a "Share" button, in our Services. Such features may process your Internet Protocol (IP) address and track which page you are visiting on our website. We may place a cookie to enable the feature to work correctly. If you are logged in on a certain social media platform and you interact with a widget or button belonging to that social media platform, this information may be recorded to your profile of such social media platform. To avoid this, you should log out from that social media platform before accessing or using the Services. Social media features and widgets may be hosted by a third party or hosted directly on our Services. Your interactions with these features are governed by the privacy notices of the companies that provide them. By clicking on one of these buttons, you agree to the use of this plugin and consequently the transfer of personal information to the corresponding social media service. We have no control over the essence and extent of these transmitted data or their additional processing.
          </li>
        </ul>

        <p className="font-bold">Will your information be shared with anyone else?</p>
        <p>
          We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information to in the section,{' '}
          <button onClick={() => scrollToSection('share')} className="text-primary hover:underline">
            "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"
          </button>
        </p>

        <p>
          We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.
        </p>

        <p>
          We have not sold or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We have disclosed the following categories of personal information to third parties for a business or commercial purpose in the preceding twelve (12) months:
        </p>

        <p>
          The categories of third parties to whom we disclosed personal information for a business or commercial purpose can be found under{' '}
          <button onClick={() => scrollToSection('share')} className="text-primary hover:underline">
            "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"
          </button>
        </p>

        <h3 className="text-xl font-semibold">Your Rights</h3>
        <p>
          You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>Right to know whether or not we are processing your personal data</li>
          <li>Right to access your personal data</li>
          <li>Right to correct inaccuracies in your personal data</li>
          <li>Right to request the deletion of your personal data</li>
          <li>Right to obtain a copy of the personal data you previously shared with us</li>
          <li>Right to non-discrimination for exercising your rights</li>
          <li>Right to opt out of the processing of your personal data if it is used for targeted advertising, the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ("profiling")</li>
        </ul>

        <h3 className="text-xl font-semibold">How to Exercise Your Rights</h3>
        <p>
          To exercise these rights, you can contact us by visiting www.ezlift.app, by emailing us at{' '}
          <a href="mailto:dev@ezlift.app" className="text-primary hover:underline">dev@ezlift.app</a>, or by referring to the contact details at the bottom of this document.
        </p>

        <p>
          We will honor your opt-out preferences if you enact the{' '}
          <a
            href="https://globalprivacycontrol.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Global Privacy Control (GPC)
          </a>
          {' '}opt-out signal on your browser.
        </p>

        <p>
          Under certain US state data protection laws, you can designate an authorized agent to make a request on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with applicable laws.
        </p>

        <h3 className="text-xl font-semibold">Request Verification</h3>
        <p>
          Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes.
        </p>

        <p>
          If you submit the request through an authorized agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf.
        </p>

        <h3 className="text-xl font-semibold">Appeals</h3>
        <p>
          Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at{' '}
          <a href="mailto:dev@ezlift.app" className="text-primary hover:underline">dev@ezlift.app</a>. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.
        </p>
      </div>

      <h2 id="other-rights" className="text-2xl font-semibold mb-6">14. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
      <div className="space-y-6 mb-12">
        <p>
          <strong>In Short:</strong> <em>You may have additional rights based on the country you reside in.</em>
        </p>

        <h3 className="text-xl font-semibold">Australia and New Zealand</h3>
        <p>
          We collect and process your personal information under the obligations and conditions set by Australia's Privacy Act 1988 and New Zealand's Privacy Act 2020 (Privacy Act).
        </p>
        <p>
          This Privacy Notice satisfies the notice requirements defined in both Privacy Acts, in particular: what personal information we collect from you, from which sources, for which purposes, and other recipients of your personal information.
        </p>
        <div className="space-y-4">
          <p>
            If you do not wish to provide the personal information necessary to fulfill their applicable purpose, it may affect our ability to provide our services, in particular:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>offer you the products or services that you want</li>
            <li>respond to or help with your requests</li>
            <li>manage your account with us</li>
            <li>confirm your identity and protect your account</li>
          </ul>
        </div>
        <p>
          At any time, you have the right to request access to or correction of your personal information. You can make such a request by contacting us by using the contact details provided in the section{' '}
          <button onClick={() => scrollToSection('review')} className="text-primary hover:underline">
            "HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?"
          </button>
        </p>
        <p>
          If you believe we are unlawfully processing your personal information, you have the right to submit a complaint about a breach of the Australian Privacy Principles to the{' '}
          <a
            href="https://www.oaic.gov.au/privacy/privacy-complaints/lodge-a-privacy-complaint-with-us"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Office of the Australian Information Commissioner
          </a>
          {' '}and a breach of New Zealand's Privacy Principles to the{' '}
          <a
            href="https://www.privacy.org.nz/your-rights/making-a-complaint/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Office of New Zealand Privacy Commissioner
          </a>.
        </p>

        <h3 className="text-xl font-semibold">Republic of South Africa</h3>
        <p>
          At any time, you have the right to request access to or correction of your personal information. You can make such a request by contacting us by using the contact details provided in the section{' '}
          <button onClick={() => scrollToSection('review')} className="text-primary hover:underline">
            "HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?"
          </button>
        </p>
        <p>
          If you are unsatisfied with the manner in which we address any complaint with regard to our processing of personal information, you can contact the office of the regulator, the details of which are:
        </p>
        <p>
          <a
            href="https://inforegulator.org.za/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            The Information Regulator (South Africa)
          </a>
          <br />
          General enquiries:{' '}
          <a href="mailto:enquiries@inforegulator.org.za" className="text-primary hover:underline">
            enquiries@inforegulator.org.za
          </a>
          <br />
          Complaints (complete POPIA/PAIA form 5):{' '}
          <a href="mailto:PAIAComplaints@inforegulator.org.za" className="text-primary hover:underline">
            PAIAComplaints@inforegulator.org.za
          </a>
          {' '}&{' '}
          <a href="mailto:POPIAComplaints@inforegulator.org.za" className="text-primary hover:underline">
            POPIAComplaints@inforegulator.org.za
          </a>
        </p>
      </div>

      <h2 id="updates" className="text-2xl font-semibold mb-6">15. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
      <div className="space-y-6 mb-12">
        <p>
          <strong>In Short:</strong> <em>Yes, we will update this notice as necessary to stay compliant with relevant laws.</em>
        </p>
        <p>
          We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.
        </p>
      </div>


      <h2 id="contact" className="text-2xl font-semibold mb-6">16. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
      <div className="space-y-6 mb-12">
        <p>
          If you have questions or comments about this notice, you may email us at{' '}
          <a href="mailto:dev@ezlift.app" className="text-primary hover:underline">
            dev@ezlift.app
          </a>
          {' '}or contact us by post at:
        </p>
        <p className="whitespace-pre-line">
          Ez Works Berlin UG
          Lindenstraße 74, 10969 Berlin, Germany
          Berlin, Berlin 10969
          Germany
        </p>
        <p>
          If you are a resident in the European Economic Area or Switzerland, we are the "data controller" of your personal information. We have appointed Ez Works Berlin UG to be our representative in the EEA and Switzerland. You can contact them directly regarding our processing of your information, by email at{' '}
          <a href="mailto:dev@ezlift.app" className="text-primary hover:underline">
            dev@ezlift.app
          </a>
          , or by post to:
        </p>
        <p className="whitespace-pre-line">
          Ez Works Berlin UG
          Lindenstraße 74, 10969 Berlin, Germany
          Berlin, Berlin 10969
          Germany
        </p>
      </div>


      <h2 id="review" className="text-2xl font-semibold mb-6">17. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
      <div className="space-y-6 mb-12">
        <p>
          Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please visit:{' '}
          <a href="https://ezlift.app" className="text-primary hover:underline">
            www.ezlift.app
          </a>
          .
        </p>
      </div>
    </>
  );
}