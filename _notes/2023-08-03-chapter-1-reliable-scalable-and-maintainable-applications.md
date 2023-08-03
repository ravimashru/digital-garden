---
publish: true
created: '2023-08-03'
title: 'Chapter 1 - Reliable, Scalable and Maintainable Applications'
fileName: Chapter 1 - Reliable Scalable and Maintainable Applications
updated: '2023-08-03'
---

((What are the challenges faced in **data-intensive applications**?::lmn))
- The **amount of data**, **complexity of data** and **speed at which data changes** are the main challenges in a data-intensive application (compared to a compute-intensive application).

((How are data-intensive applications different from regular tools like databases?::lmn))
- **Standard building blocks** for building data-intensive applications (e.g. databases, caches, search indexes, stream/batch processing), but **how they are combined** depends on the application's requirements.

((Why do we put different tools together under the umbrella of data systems?::lmn))
- **Blurred boundaries between categories of tools** that are available since each tool is optimised for a different use-case (Redis - data store used as messaging queue, Apache Kafka - message queue with database-like guarantees).
- **Multiple specialised tools** are used and stitched together using application code because many applications have diverse requirements that cannot be met with a single tool.

## Reliability

> "Continuing to work correctly, even when things go wrong."

((What is the difference between faults and failures?::lmn))
**Faults**: things that can go wrong; one component of the system deviating from its spec.

**Failure**: system as a whole stops providing required service to the user.

**Fault-tolerant system**: one that can anticipate faults and cope with them.

A system cannot be made tolerant of every kind of fault; instead, design system to **prevent faults from causing failures**.

((How can you test a system to ensure faults don't cause failures?::lmn))
((related: chaos engineering, Chaos Monkey by Netflix::rmn))
Deliberately increase the rate of faults and observe the behaviour of the system. Keep enhancing fault-tolerance mechanism until confident that faults that occur naturally will be handled by the system without causing a failure.

((What are common reasons of sacrificing reliability?::lmn))
Reliability could be sacrificed to:
- reduce development costs (e.g. for a prototype product for unproven market).
- reduce operational costs (e.g. for a service that doesn't make a lot of money).

((What types of faults can cause system failures?::lmn))
System failures could be caused by **hardware** faults, **software** errors or **human** errors.

### Hardware faults

((Why is there an increase in hardware faults?::lmn))
Higher volume of data and computing demands requires larger number machines, which in turn increases the rate of faults.

((Can hardware faults be intentional?::lmn))
Hardware faults can be intentional, e.g. if system prioritises flexibility and elasticity over the reliability of a single machine.

((How can we deal with hardware faults?::lmn))
To prevent failure:
- of a single machine, add **redundancy to individual hardware components** (so that when one component fails, the redundant one can take its place while being fixed).
- ((open question: examples of software fault tolerance techniques?::rmn))of whole system even if an entire machine goes down, use **software fault-tolerance techniques**.

((Advantage of systems that can tolerate loss of entire machines?::lmn))
Systems that can tolerate loss of entire machines can be patched/upgraded one node at a time without downtime of the entire system((aka rolling upgrade::rsn)), contra: **planned downtime** required for single-server systems.

### Software errors

((When do software errors typically surface?::lmn))
Software errors could lie dormant for a long time before being triggered by a particular set of circumstances in which **assumptions made while building system become false**.

((How can software errors be reduced?::lmn))
Things that can help deal with software errors:
- think carefully about assumptions and interactions of system.
- thorough testing.
- process isolation.((open question: what does this mean?::rsn))
- allowing processes to crash and restart.
- measuring, monitoring and analyzing system behavior in production.

### Human errors

> "Even when they have the best intentions, humans are known to be unreliable."

((Why is it important to balance complexity of system interfaces?::lmn))
Well defined interfaces minimise the opportunity for error, but if they are too restrictive then users will try to work around them.

((How can users explore a system without causing failures for other users?::lmn))
Provide fully features non-production environments for users to explore and experiment without affecting other users.

((How to check if system can deal with different situations that can arise?::lmn))
((related: the testing pyramid::rmn))
Use unit tests, integration tests, manual tests. Use automated testing to cover corner cases.

((How can we deal with errors after they have occurred?::lmn))
Allow quick and easy recovery - make rolling back configuration changes fast, roll out new code gradually, allow easy recomputation of data.

((How can we get an early warning if things are going wrong?::lmn))
Set up detailed and clear monitoring (e.g. performance metrics, error rates)((aka telemetry::rsn)) to check if something is going wrong and proactively fix or use to diagnose an issue that has occurred.

## Scalability

**Load parameters**: numbers used to describe the load on a system (e.g. requests per second for web server, ratio of reads to writes to database, etc.)

((What are the best load parameters to use?::lmn))
The best choice of load parameters depends on the architecture of the system.

Scalability is a system's **ability to cope with increased load**.

((Why would a reliable system today not be so with increased load?::lmn))
A system's reliability might degrade because of:
- increased number of concurrent users.
- increased volume of data to process.

**Fan-out**: the number of requests to other services that need to be made in order to serve one incoming request.

**Performance**: a measure of how the system is performing under a given load.

((How can performance be measured?::lmn))
Possible measures of performance:
- Batch systems
	- **throughput** - number of records processed per second.
	- **total run time** of a job with a dataset of a certain size.
- Online systems
	- **response time** - time between client sending a request and receiving a response.

((What is the difference between **response time** and **latency**?::lmn))
Response time is what the client sees, including network and queuing delays. Latency is the duration that a request is waiting to be handled.

((How can you measure the scalability of a system?::lmn))

| Load parameter | System resources                    | Performance             |
| -------------- | ----------------------------------- | ----------------------- |
| Increase       | Keep unchanged                      | **What is the impact?** |
| Increase       | **How much needs to be increased?** | Keep unchanged          |

((How should response time be measured?::lmn))
For a system dealing with varied requests, the response time can vary a lot, so measure it as a **distribution of values**.

((Why shouldn't response times be averaged?::lmn))
The average response time of a service doesn't tell you how many users actually experienced that delay.

((How should a distribution of values be analyzed?::lmn))
Use percentiles to measure distributions of values:
- p50 / median - half requests return in less than this time.
- pN - N% of requests return in less than that time.

**Tail latencies**: high percentiles of response times (p95, p99, p999 - response time thresholds at at which 95%, 99% and 99.9% of requests are faster than that threshold).

((Why are tail latencies important?::lmn))
Tail latencies directly affect users' experience of the service. They could be coming from users with the most data in their accounts.

((Why aren't tail latencies always optimized?::lmn))
Optimizing tail latencies:
- could be too expensive and not yield enough benefit.
- could be difficult because of random events outside your control.

Queueing delays account for a large part of response time at high percentiles because a server can only process a small number of things in parallel. A small number of slow requests can hold up processing of subsequent requests - **head-of-line blocking**.

((Why are high percentiles important for services called multiple times?::lmn))
When a service is called multiple times to serve a single end-user request, even if all requests are made in parallel, the end-user request will have to wait for the slowest of all parallel calls to complete.

**Tail latency amplification**: when a higher number of end-user requests end up being slow because they require multiple backend calls, although only a small percentage of backend calls are slow.

Since multiple backend calls are required, the chance of getting a slow call increases. As a result, a higher proportion of end-user requests could end up being slow.

((How can we deal with increased load?::lmn))
Good architectures involve a combination of:
- **scaling up** - vertical scaling.
- **scaling out** - horizontal scaling.

((In what ways can a system be scaled?::lmn))
A system can be scaled:
- elastically by automatically add computing resources when a load increase is detected; useful if load is highly unpredictable.
- manually by a human after analyzing capacity; simpler and with fewer operational surprises.

((Why can't a scalable architecture be "reused" across applications?::lmn))
An architecture that scales well for a particular application is built around assumptions of which operations will be common and which will be rare (load parameters).

## Maintainability

> "It is well known that the majority of cost of software is not in its initial development, but in its ongoing maintenance."

Three design principles for building maintainable systems:
1. Operability - make it easy for ops team to keep systems running smoothly.
2. Simplicity - make it easy for new engineers to understand.
3. Evolvability - make it easy for engineers to change as requirements change.

((How can the operability of a system be improved?::lmn))
Routine tasks should be made easy for the ops team so that they can focus on high value activities.

Routine tasks can be made easy by: good monitoring, good support for automation, good documentation, providing sensible defaults with a way to override them, etc.

((How can a system be made simple?::lmn))
Remove **accidental complexity** - complexity not required to solve the problem but arises from the implementation.

A system would need to evolve/change due to:
- previously unanticipated use cases.
- changing business priorities.
- new feature requests.
- rearchitecture forced by growth of the system.

