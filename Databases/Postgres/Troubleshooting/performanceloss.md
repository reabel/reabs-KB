# Issue

- Large dataset is slowing down query performance.
    - after restart of server, performance eventually returns
    
# Potential Causes

- Memory issue?
    - Mentioned to me that indexes could be switching from memory to page file or swap
    - postgres conf file might indicate memory limit

# Potential solutions

- increase virtual memory alotment in java vm?