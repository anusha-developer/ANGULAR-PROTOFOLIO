using PROTOFOLIO.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PROTOFOLIO.Repositary
{
    public interface TaskRepositary
    {
        Task CreateTask(Task task);

        Task GetTaskById(int id);
        List<Task> GetAllTasks();
        Task UpdateTask(Task task, int id);
        string DeleteTask(int id);
        int taskcount();

    }
}